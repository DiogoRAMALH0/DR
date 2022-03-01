pseudo="technet";
function profil_j(){
	$.get("./getProfil.php?name="+pseudo).done( function(data){
		profil = jQuery.parseJSON(data);
		$( "#pseudo" ).text(profil.name);
		$("#icon").attr("src","http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/"+profil.profileIconId+".png");
	   // $("#m").click(
	
		console.log(profil);
	
	});
};


$("#go").click(function(){
	pseudo = $("#joueur").val();
	console.log("pseudo : "+ pseudo);
	console.log("profil");
	profil_j();
});


profil_j();
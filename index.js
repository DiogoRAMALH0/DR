$.get("./getProfil.php?name=technet")
.done( function(data){
	profil = jQuery.parseJSON(data);
	$( "#pseudo" ).text(profil.name);
	$("#icon").attr("src","http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/"+profil.profileIconId+".png")
	console.log(profil);
	console.log(profil.name);
});
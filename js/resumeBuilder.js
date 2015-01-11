var formattedName = HTMLheaderName.replace("%data%" , "Ramin");
var formattedRole = HTMLheaderRole.replace("%data%" , "Physicist, Mathematician, Revolutionary Scientist");
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var bio = {
  name : 'Ramin',
  role : 'Physicist, Mathematician, Revolutionary Scientist',
  pictureURL : 'http://img3.wikia.nocookie.net/__cb20121116091113/mangafree/es/images/7/74/Genius_meme.jpg',
  welcomeMessage : 'I can do most intellectual tasks... that includes writing a Poem',
  skills : ["Advanced Mathematics", "Quantum Computer configuration", "Computational Data Analysis", "Python programming", "Origami"]
};

for(e in bio){
  $('#main').append(bio.e);
};

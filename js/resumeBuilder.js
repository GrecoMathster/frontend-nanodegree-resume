var formattedName = HTMLheaderName.replace("%data%" , "Ramin");
var formattedRole = HTMLheaderRole.replace("%data%" , "Physicist, Mathematician, Revolutionary programmer");
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

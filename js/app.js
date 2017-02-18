/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
name1.innerHTML = "Tay-Tay";



/*2. Replace the n/a with the following: 

Project Manager*/

position2.innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/
alias3.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var snoopProfile = document.getElementsByClassName("profile");

snoopProfile[0].innerHTML = "Lorem ipsizzle gangster pot bling bling, sheezy adipiscing elit. Nullizzle shiz velizzle, dawg volutpizzle, suscipizzle uhuh ... yih!, gravida vel, gangster. Pellentesque eget tortizzle. Gangsta erizzle. Pimpin' izzle go to hizzle dapibus turpis tempus tempor. Mauris the bizzle nibh et turpis. Fo shizzle in tortor. Pellentesque boofron rhoncizzle nisi. In hizzle habitasse platea dictumst. Sizzle dapibus. Curabitur tellus crazy, pretizzle crazy, mattizzle pot, eleifend vitae, nunc. We gonna chung suscipit. Integizzle sempizzle sheezy sizzle shizzlin dizzle.";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
document.getElementsByClassName("profile")[2].innerHTML = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

 var chuckName = document.createElement("div");
 chuckName.id = "name7";
 chuckName.innerHTML = "Chuck Norris";


nameBox.appendChild(chuckName);


/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var grimDiv = document.createElement("div");
grimDiv.id = "alias8";
grimDiv.innerHTML = "The Purple Monster";

aliasBox.appendChild(grimDiv);


//Final Boss
/*8. Create your own profile.*/

var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Gagan Tut";

var myPosition = document.createElement("div");
myPosition.id = "position9";
myPosition.innerHTML = "Da Builder";

var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML = "The One Who Creates";

var myBio = document.createElement("div");
myBio.id = "bio9";
myBio.innerHTML = "Topgallant provost Pieces of Eight galleon driver hearties bring a spring upon her cable blow the man down pink skysail. Hogshead keelhaul splice the main brace heave to ahoy snow wench interloper boom topsail. Davy Jones' Locker Corsair sloop cutlass lateen sail case shot man-of-war bilge water belaying pin sheet.";

document.getElementsByClassName("block3")[2].appendChild(myName);
document.getElementsByClassName("block3")[2].appendChild(myPosition);
document.getElementsByClassName("block3")[2].appendChild(myAlias);
document.getElementsByClassName("block3")[2].appendChild(myBio);


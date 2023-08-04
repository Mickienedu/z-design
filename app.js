// the nav links for sidemenu
let sidemeu = document.getElementById("firstNav");/*getting the ID name from html file */

function openmenu(){ /* adding the functions we added in the icon*/
    sidemeu.style.right = "0"; /*whenever the right is "0" it will be visible */
}
function closemenu(){
    sidemeu.style.right = "-200px" /* if its close menu, it will be '-200'*/
}

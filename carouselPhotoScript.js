/**
 * Created by Maxime on 2015-09-08.
 */

//Compteur pour le changement d'image
var i = -1;

//Tableau des images a afficher
var images = [
            "http://ep1.pinkbike.org/p5pb12565613/p5pb12565613.jpg",
            "http://ep1.pinkbike.org/p5pb12564280/p5pb12564280.jpg",
            "http://ep1.pinkbike.org/p5pb12564664/p5pb12564664.jpg",
            "http://ep1.pinkbike.org/p5pb12555784/p5pb12555784.jpg",
            "http://ep1.pinkbike.org/p5pb12587604/p5pb12587604.jpg",
            "http://ep1.pinkbike.org/p5pb12565615/p5pb12565615.jpg"];


//Nombre d'images dans le tableau
var nombreImage = images.length-1;


//Timer
var myVar = setInterval(function(){changeImage()},3000);


//Changement automatique des images:  Onload
function changeImage() {
    allGreen();
    if (i < nombreImage){
        i++;
    }
    else{
        i=0;
    }
    document.getElementById("framePhoto").src = images[i];
    imageChanger();
}


//Changement des images avec les fleches
function changeAvecFleche(direction){
    allGreen();
    if (direction == "gauche"){
        if(i == 0){
            i = nombreImage;
        }
        else{
            i = i-1;
        }
    }
    else{
        if(i == nombreImage){
            i = 0;
        }
        else{
            i = i+1;
        }
    }
    document.getElementById("framePhoto").src = images[i];
    imageChanger();

    //Reset du timer a 0
    resetTimer();
}

//Changement avec les bullets points
function changeAvecBullet(numeroBullet){
    allGreen();
    document.getElementById("framePhoto").src = images[numeroBullet];
    i = numeroBullet;
    imageChanger();
    resetTimer();
}

//Changer la couleur du bullet point lorsque selectionné
function imageChanger(){
    document.getElementById(i).src= "http://www.clker.com/cliparts/7/Q/L/g/y/j/button-orange-small-md.png";
}

//Remettre tous les bullets point en vert
function allGreen(){
    for (j = 0; j <= nombreImage; j++){
        document.getElementById(j).src= "http://l.rgbimg.com/cache1qH4LR/users/b/ba/ba1969/600/n4yMWAi.jpg";
    }
}

//Reset le timer lors d'un changement d'image
function resetTimer(){
    clearInterval(myVar);
    myVar = setInterval(function(){changeImage()},3000);
}

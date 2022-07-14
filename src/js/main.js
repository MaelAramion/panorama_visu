// Ajouts des panoramas
const portail = new PANOLENS.ImagePanorama("src/img/exterieur_entree_parking_personnel.jpg");
portail.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter( orientation[0], 0 );
  } );
const parking_personnel = new PANOLENS.ImagePanorama("src/img/exterieur_parking_personnel.jpg");
parking_personnel.addEventListener( 'enter-fade-start', function(){
      viewer.tweenControlCenter( orientation[1], 0 );
} );
const secretariat_droit = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_droit.jpg");
secretariat_droit.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter( orientation[2], 0 );
} );
const secretariat_gauche = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_gauche.jpg");
secretariat_gauche.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter( orientation[3], 0 );
} );
const secretariat_interieur = new PANOLENS.ImagePanorama("src/img/interieur_secretariat.jpg")
secretariat_interieur.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter( orientation[4], 0 );
} );
const badminton = new PANOLENS.ImagePanorama("src/img/exterieur_badminton.jpg"); 
secretariat_interieur.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter( orientation[5], 0 );
} );


const viewer = new PANOLENS.Viewer({ output: "console" });


var orientation = [
    new THREE.Vector3(3445.06, 3.28, -3670),
    new THREE.Vector3(4705.82, -372, -1634.80),
    new THREE.Vector3(920.99, -64.89, -4906.94),
    new THREE.Vector3(1557.25, -478.06, 4723.27),
    new THREE.Vector3(-4871.97, -583.40, 915.26),
    new THREE.Vector3(4976.66, -344.19, 187.29)

  ];


// Fonction au click de l'infospot
function onFocus() {
    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(portail);
        viewer.add(secretariat_droit);
        viewer.setPanorama(secretariat_droit);
    } else {
        viewer.remove(secretariat_droit);
        viewer.add(portail);
        viewer.setPanorama(portail);
    }
}


// Fonction qui ajoute les infospots
function display(portail, nextPanorama, pos1, pos2, pos3) {

    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(pos1, pos2, pos3);
    //        infospot.addHoverText( 'Infospot1');
    infospot.addEventListener("click", () => {
        viewer.remove(portail);
        viewer.add(nextPanorama);
        viewer.setPanorama(nextPanorama);
    });
    portail.add(infospot);
    viewer.add(portail);
}

// display(panorama de départ, panorama d'arrivé, coordonées de l'infospot)
display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
display(secretariat_droit, portail, 58.5, -378, 4982);
display(secretariat_droit, secretariat_interieur, 610.78, 216.07, -4950.07);
display(secretariat_interieur, secretariat_droit, 4950.11, -650.30, 75.21);
display(secretariat_interieur, secretariat_gauche, -4984.36, -362.20, -26.96);
display(secretariat_droit, secretariat_gauche, 4971.64, -445.35, 127.31);
display(secretariat_gauche, secretariat_droit, 123.80, -180.37, -4986.42);
display(secretariat_gauche, secretariat_interieur, 4780.20, -442.16, -1369.86);
display(secretariat_gauche, badminton, 4757.03, -294.87, 1493.86);
display(portail, parking_personnel, 4979.89, -86.38, -319.01);
display(parking_personnel, badminton, 4972.78, -376.78, 236.91);
display(parking_personnel, portail, -2046.70, -180.56, -4553.14);
display(badminton, parking_personnel, -4908.75, 97.11, 901.49);
display(badminton, parking_personnel, -4654.45, -37.66, -1803.65);


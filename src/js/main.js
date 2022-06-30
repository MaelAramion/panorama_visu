// Ajouts des panoramas
const portail = new PANOLENS.ImagePanorama("src/img/exterieur_entree_parking_personnel.jpg");
const secretariat_droit = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_droit.jpg");
const secretariat_gauche = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_gauche.jpg");
const parking_personnel = new PANOLENS.ImagePanorama("src/img/exterieur_parking_personnel.jpg");
const badminton = new PANOLENS.ImagePanorama("src/img/exterieur_badminton.jpg");


const viewer = new PANOLENS.Viewer({ output: "console" });


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

// display(panorama de départ, panorama d'arrivé, coordonées de l'infospo)
display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
display(secretariat_droit, portail, 58.5, -378, 4982);
display(secretariat_droit, secretariat_gauche, 4971.64, -445.35, 127.31);
display(secretariat_gauche, secretariat_droit, 123.80, -180.37, -4986.42);
display(portail, parking_personnel, 4979.89, -86.38, -319.01);
display(parking_personnel, badminton, 4972.78, -376.78, 236.91);
display(parking_personnel, portail, -2046.70, -180.56, -4553.14);
display(badminton, parking_personnel, -4908.75, 97.11, 901.49);

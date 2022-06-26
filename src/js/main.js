// Ajouts des panoramas
const portail = new PANOLENS.ImagePanorama("src/img/portail.jpg");
const secretariat_arriere = new PANOLENS.ImagePanorama("src/img/secretariat_arriere.jpg");
const secretariat_cote = new PANOLENS.ImagePanorama("src/img/secretariat_cote.jpg");


const viewer = new PANOLENS.Viewer({ output: "console" });


// Fonction au click de l'infospot
function onFocus() {
    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(portail);
        viewer.add(secretariat_arriere);
        viewer.setPanorama(secretariat_arriere);
    } else {
        viewer.remove(secretariat_arriere);
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
display(portail, secretariat_arriere, 3034, -225, -3956);
display(secretariat_arriere, portail, 58.5, -378, 4982);
display(secretariat_arriere, secretariat_cote, 4971.64, -445.35, 127.31);
display(secretariat_cote, secretariat_arriere, 123.80, -180.37, -4986.42);

const orientation = [
    new THREE.Vector3(3445.06, 3.28, -3670),
    new THREE.Vector3(4705.82, -372, -1634.8),
    new THREE.Vector3(920.99, -64.89, -4906.94),
    new THREE.Vector3(1557.25, -478.06, 4723.27),
    new THREE.Vector3(-4871.97, -583.4, 915.26),
    new THREE.Vector3(4976.66, -344.19, 187.29),
];

// Ajouts des panoramas
const portail = new PANOLENS.ImagePanorama("src/img/exterieur_entree_parking_personnel.jpg");

const parking_personnel = new PANOLENS.ImagePanorama("src/img/exterieur_parking_personnel.jpg");

const secretariat_droit = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_droit.jpg");

const secretariat_gauche = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_gauche.jpg");

const secretariat_interieur = new PANOLENS.ImagePanorama("src/img/interieur_secretariat.jpg");

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

function redirect(portail, url, pos1, pos2, pos3) {
    var infoRedirect = new PANOLENS.Infospot(300, "src/img/arrow.png");
    infoRedirect.position.set(pos1, pos2, pos3);
    //        infospot.addHoverText( 'Infospot1');
    infoRedirect.addEventListener("click", () => {
        window.location.href = url;
    });
    portail.add(infoRedirect);
    viewer.add(portail);
}

// Fonction qui ajoute les infospots
function display(portail, nextPanorama, pos1, pos2, pos3, o1, o2, o3) {
    var infospot = new PANOLENS.Infospot(300, "src/img/arrow.png");
    infospot.position.set(pos1, pos2, pos3);
    //        infospot.addHoverText( 'Infospot1');
    infospot.addEventListener("click", () => {
        viewer.remove(portail);
        viewer.add(nextPanorama);
        viewer.setPanorama(nextPanorama);
        if(o1 != null && o2 != null && o3 != null){
            nextPanorama.addEventListener('enter-fade-start', function () {
                viewer.tweenControlCenter(new THREE.Vector3(o1, o2 , o3), 0);
            });
        }
    });
    portail.add(infospot);
    viewer.add(portail);
}

// Fonction qui choisi établi le panorama de départ
function redirectPanorama(panorama_depart) {
    if (panorama_depart == "portail") {
        display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
        display(secretariat_droit, portail, 58.5, -378, 4982);
        display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42);
    }
    if (panorama_depart == "secretariat_droit") {
        display(secretariat_droit, portail, 58.5, -378, 4982);
        display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
        display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42);
    }
    if (panorama_depart == "secretariat_gauche") {
        display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42);
        display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
        display(secretariat_droit, portail, 58.5, -378, 4982);
        secretariat_gauche.addEventListener('enter-fade-start', function () {
            viewer.tweenControlCenter(new THREE.Vector3(-4979.72, 28.77, 365.36), 0);
        });
    }
    if (panorama_depart == "badminton") {
        display(badminton, parking_personnel, -4908.75, 97.11, 901.49);
        badminton.addEventListener('enter-fade-start', function () {
            viewer.tweenControlCenter(new THREE.Vector3(-20.59, -351.53, 4985.11), 0);
        });
        display(portail, secretariat_droit, 2674.21, -316.66, -4202.18);
        display(secretariat_droit, portail, 58.5, -378, 4982);
        display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42);
    }

    // display(panorama de départ, panorama d'arrivé, coordonées de l'infospot)
    display(portail, secretariat_droit, 2674.21, -316.66, -4202.18, -47.16, -147.59, -4991.73);
    display(secretariat_droit, secretariat_interieur, 579.92, -119.75, -4958.78,-4981.72, -391.67, 55.23);
<<<<<<< Updated upstream
    display(secretariat_droit, portail, 58.5, -378, 4982, -2472.54, -774.92, 4275.68);
    display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42, -4970.70, -302.72, 332.04);
    display(secretariat_interieur, secretariat_droit, 4950.11, -650.3, 75.21);
=======
    display(secretariat_droit, portail, 58.5, -378, 4982, -2169.86, -187.19, 4490.10);
    display(secretariat_gauche, secretariat_droit, 123.8, -180.37, -4986.42, -4987.88, 120.96, 140.62);
    display(secretariat_interieur, secretariat_droit, 4950.11, -650.3, 75.21, -4962.71, 301.38, -485.55);
>>>>>>> Stashed changes
    display(secretariat_interieur, secretariat_gauche, -4984.36, -362.2, -26.96);
    display(secretariat_droit, secretariat_gauche, 4971.64, -445.35, 127.31, 590.46, -359.03, 4947.61);
    display(secretariat_gauche, secretariat_interieur, 4780.2, -442.16, -1369.86, 4947.18, -679.20, 65.81);
    display(secretariat_gauche, badminton, 4757.03, -294.87, 1493.86);
<<<<<<< Updated upstream
    display(portail, parking_personnel, 4979.89, -86.38, -319.01, 1122.00, -1188.01, 4719.76);
    display(parking_personnel, badminton, 4972.78, -376.78, 236.91, 4953.83, -507.10, -327.54);
    display(parking_personnel, portail, -2046.7, -180.56, -4553.14, -4191.74, -707.60, -2616.41);
    display(badminton, parking_personnel, -4908.75, 97.11, 901.49, -4971.81, -69.40, 485.78);
    display(badminton, secretariat_gauche, -4654.45, -37.66, -1803.65);
=======
    display(portail, parking_personnel, 4979.89, -86.38, -319.01, 3865.25, -130.78, 3152.85);
    display(parking_personnel, badminton, 4972.78, -376.78, 236.91);
    display(parking_personnel, portail, -2046.7, -180.56, -4553.14,-4772.82, -37.66, -1473.94);
    display(badminton, parking_personnel, -4908.75, 97.11, 901.49);
    display(badminton, secretariat_gauche, -4654.45, -37.66, -1803.65,-4962.73, 377.42, 428.13);
>>>>>>> Stashed changes

    redirect(secretariat_droit, "../?groupe=1", 17.28, 66.34, -4996.49);
    redirect(secretariat_gauche, "../?groupe=1&panorama_depart=ext_i4", 4985.79, -246.72, 86.11);
    redirect(badminton, "../?groupe=1&panorama_depart=ext_i4", 633.5, -126.82, -4950.01);
}

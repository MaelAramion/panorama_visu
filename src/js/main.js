// Ajouts des panoramas
const ext_secretariat_gauche = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_gauche.jpg");
const ext_secretariat_droit = new PANOLENS.ImagePanorama("src/img/exterieur_secretariat_droit.jpg");
const ext_parking_personnel = new PANOLENS.ImagePanorama("src/img/exterieur_parking_personnel.jpg");
const ext_entre_parking_personnel = new PANOLENS.ImagePanorama("src/img/exterieur_entree_parking_personnel.jpg");
const ext_badminton = new PANOLENS.ImagePanorama("src/img/exterieur_badminton.jpg");

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

// display(panorama, otherpic, 3034, -225, -3956);
// display(otherpic, otherpic2, 4985.19, -369.81, 76.94);
// display(otherpic2, otherpic, 4985.19, -369.81, 76.94);

const panoramasSettings = [
    {
        panorama: ext_entre_parking_personnel,
        interestsPoint: [
            {
                panorama: ext_secretariat_droit,
                coordonate: [2664, -275, -4210],
            },
            {
                panorama: ext_parking_personnel,
                coordonate: [4966.35, -261, -445],
            },
        ],
    },
    {
        panorama: ext_secretariat_droit,
        interestsPoint: [
            {
                panorama: ext_badminton,
                coordonate: [4985.19, -369.81, 76.94],
            },
        ],
    },
    {
        panorama: ext_parking_personnel,
        interestsPoint: [
            {
                panorama: ext_entre_parking_personnel,
                coordonate: [-2084, -239, -4531],
            },
        ],
    },
    {
        panorama: ext_badminton,
        interestsPoint: [
            {
                panorama: ext_secretariat_gauche,
                coordonate: [-4675, -41, -1749],
            },
        ],
    },
    {
        panorama: ext_secretariat_gauche,
        interestsPoint: [
            {
                panorama: ext_secretariat_droit,
                coordonate: [83, -379, -4981],
            },
            {
                panorama: ext_entre_parking_personnel,
                coordonate: [64, -472, -4971],
            },
        ],
    },
];

panoramasSettings.forEach((item) => {
    display2(item.panorama, item.interestsPoint);
});

function display2(panorama, interestsPoints) {
    interestsPoints.forEach((interest) => {
        const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
        infospot.position.set(...interest.coordonate);
        panorama.add(infospot);
        infospot.addEventListener("click", () => {
            viewer.remove(panorama);
            viewer.add(interest.panorama);
            viewer.setPanorama(interest.panorama);
        });
    });
    viewer.add(panorama);
}
// display(panorama de départ, panorama d'arrivé, coordonées de l'infospo)
// display(portail, secretariat_arriere, 3034, -225, -3956);
// display(secretariat_arriere, portail, 58.5, -378, 4982);
// display(secretariat_arriere, secretariat_cote, 4971.64, -445.35, 127.31);
// display(secretariat_cote, secretariat_arriere, 123.8, -180.37, -4986.42);

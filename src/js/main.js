// var field = true;
const panorama = new PANOLENS.ImagePanorama("src/img/portail.jpg");
const otherpic = new PANOLENS.ImagePanorama("src/img/portail-secretariat.jpg");
const otherpic2 = new PANOLENS.ImagePanorama("src/img/portail-secretariat-2.jpg");
const viewer = new PANOLENS.Viewer({ output: "console" });

// const theta1 = -Math.PI / 40; // hauteur -pi/2 à pi/2
// const phi1 = (Math.PI * 4) / 5; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant

// const theta2 = -Math.PI / 10; // hauteur -pi/2 à pi/2
// const phi2 = (Math.PI * 4) / 5; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
// var rayon = panorama.radius;
// console.log("Rayon : " + rayon);

// var position = new THREE.Vector3(
//     rayon * Math.cos(theta1) * Math.sin(phi1), // Attention Y sphère
//     rayon * Math.sin(theta1), // Attention Z de la sphère
//     rayon * Math.cos(theta1) * Math.cos(phi1) // Attention X de la sphère
// );

// var taille = 300;

// var infospot = new PANOLENS.Infospot((taille * position.length()) / rayon, PANOLENS.DataImage.Info);
// infospot.position.copy(position);
// //        infospot.addHoverText( 'Infospot1');
// infospot.addEventListener("click", onFocus);
// panorama.add(infospot);

// var otherinfo = new PANOLENS.Infospot((taille * position.length()) / rayon, PANOLENS.DataImage.Info);
// otherinfo.position.copy(position);
// //        otherinfo.addHoverText( 'Infospot1');
// otherinfo.addEventListener("click", onFocus);
// otherpic.add(otherinfo);

// viewer.add(panorama);
// viewer.render.sortObjects = true;

// function onFocus() {
//     console.log("Clic sur Infospot");
//     if (field) {
//         viewer.remove(panorama);
//         viewer.add(otherpic);
//         viewer.setPanorama(otherpic);
//     } else {
//         viewer.remove(otherpic);
//         viewer.add(panorama);
//         viewer.setPanorama(panorama);
//     }

//     field = !field;
// }

function display(panorama, nextPanorama, pos1, pos2, pos3) {
    // const panorama = new PANOLENS.ImagePanorama(imgPath);
    // const rayon = panorama.radius;
    // const taille = 300;

    // var position = new THREE.Vector3(
    //     rayon * Math.cos(theta) * Math.sin(phi), // Attention Y sphère
    //     rayon * Math.sin(theta), // Attention Z de la sphère
    //     rayon * Math.cos(theta) * Math.cos(phi) // Attention X de la sphère
    // );

    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(pos1, pos2, pos3);
    //        infospot.addHoverText( 'Infospot1');
    infospot.addEventListener("click", () => {
        viewer.remove(panorama);
        viewer.add(nextPanorama);
        viewer.setPanorama(nextPanorama);
    });
    panorama.add(infospot);
    viewer.add(panorama);
}

// display(panorama, otherpic, 3034, -225, -3956);
// display(otherpic, otherpic2, 4985.19, -369.81, 76.94);
// display(otherpic2, otherpic, 4985.19, -369.81, 76.94);

const panoramasSettings = [
    {
        panorama: panorama,
        interestsPoint: [
            {
                panorama: otherpic,
                coordonate: [3034, -225, -3956],
            },
            {
                panorama: otherpic,
                coordonate: [5000, -225, -3956],
            },
        ],
    },
    {
        panorama: otherpic,
        interestsPoint: [
            {
                panorama: otherpic2,
                coordonate: [4985.19, -369.81, 76.94],
            },
        ],
    },
    {
        panorama: otherpic2,
        interestsPoint: [
            {
                panorama: otherpic,
                coordonate: [4985.19, -369.81, 76.94],
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

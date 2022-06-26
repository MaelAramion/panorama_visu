var field = true;
const panorama = new PANOLENS.ImagePanorama("src/img/portail.jpg");
const otherpic = new PANOLENS.ImagePanorama("src/img/portail-secretariat.jpg");
const viewer = new PANOLENS.Viewer({ output: "console" });

const theta1 = -Math.PI / 40; // hauteur -pi/2 à pi/2
const phi1 = (Math.PI * 4) / 5; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant

const theta2 = -Math.PI / 10; // hauteur -pi/2 à pi/2
const phi2 = (Math.PI * 4) / 5; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
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

function display(panorama, nextPanorama, pos1, pos2, pos3) {
    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(pos1, pos2, pos3);
    panorama.add(infospot);
    viewer.add(panorama);
    //        infospot.addHoverText( 'Infospot1');
    infospot.addEventListener("click", () => {
        viewer.remove(panorama);
        viewer.add(nextPanorama);
        viewer.setPanorama(nextPanorama);
    });
}

display(panorama, otherpic, 3034, -225, -3956);
display(otherpic, panorama, 58.5, -378, 4982);

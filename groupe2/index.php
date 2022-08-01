<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css">
    <script src="js/panolens/three.min.js"></script>
    <script src="js/panolens/panolens.min.js"></script>
    <title>Equipe 2 Visualisation 3D</title>
</head>

<body>
<script>
    var field = true;

    //---- Image ----//
    const avToilette = new PANOLENS.ImagePanorama('img/av-toilette.jpg');
    const avDeck = new PANOLENS.ImagePanorama('img/av-deck.jpg');
    const toilette = new PANOLENS.ImagePanorama('img/toilettes.jpg');
    const deck = new PANOLENS.ImagePanorama('img/deck.jpg');
    const escalPark = new PANOLENS.ImagePanorama('img/escalier-parking.jpg');
    const parkEtudiant = new PANOLENS.ImagePanorama('img/parking-etudiant.jpg');
    const viewer = new PANOLENS.Viewer({output: 'console'});

    //----- InfoSpot -----//

    //------------- point ver un autre groupe-------------//
    //-- escalier etudiant -> i8 balcon --//
    // onFocus(escalPark, "nomImage", -4981.21, -158.31, 239.80);

    //-- avant les toilette -> i8 entré --//
    // onFocus(avToilette, "nomImage", -4981.21, -158.31, -100);

    function redirectPanorama(panorama_depart) {
        if (panorama_depart == 'escalier_parking') {
            onFocus(escalPark, parkEtudiant, 4966.56, -543.82, -1.82);
            escalPark.addEventListener('enter-fade-start', function () {
                viewer.tweenControlCenter(new THREE.Vector3(4957.40, -475.59, -330.72), 0);
            });
        }
        if (panorama_depart == 'cafet') {
            //------------- devant la cafet -------------//
            //-- devant la cafet  -> toilette --//
            onFocus(avToilette, toilette, -50, -138.28, 4836.59);
            avToilette.addEventListener('enter-fade-start', function () {
                viewer.tweenControlCenter(new THREE.Vector3(4978.77, -262.22, 208.41), 0);
            });
        }

        //-- avant toilette  -> avant deck --//
        onFocus(avToilette, avDeck, 4988.82, -233.28, 38.52);

        //-------------toilette ------------- //
        //-- toilette -> avant toilette --//
        onFocus(toilette, avToilette, 891.83, 0, -4902.32, -49.09, -468.28, -4973.02);

        //------------- devant le deck -------------//
        //avant deck -> escalier parcking
        onFocus(avDeck, escalPark, 79.71, 100, -4965.24, -154.87, -693.62, -4940.81);

        //-- avant deck--> avant toilette --//
        onFocus(avDeck, avToilette, -5000, 100.01, -40, -4996.29, -72.59, 16.28);

        //-- avant le deck -> deck --//
        onFocus(avDeck, deck, 4983.67, -394.06, -13.51, -4956.25, -243.08, 564.96);

        //------------- Deck -------------//
        //-- deck -> avant deck --//
        onFocus(deck, avDeck, 5733, -355, 220, -4997.34, 44.83, -17.18);

        //------------- escalier parcking -------------//
        //-- escalier parcking -> parcking etudiant --//
        onFocus(escalPark, parkEtudiant, 4966.56, -543.82, -1.82, -4934.24, -587.12, 519.28);

        //-- escalier parcking -> avant le deck --//
        onFocus(escalPark, avDeck, -80, 0, 4902.32, -4946.42, -131.77, 654.97);

        //------------- parcking -------------//
        //-- parcking etudiant -> escalier parcking --//
        onFocus(parkEtudiant, escalPark, 5733, 240, 420, -4989.73, 105.48, 116.80);


        // Redirection
        redirect(avToilette, '../?groupe=1&panorama_depart=exterieur_salle_i18', -4990.19, 12.07, -178.14);
        redirect(escalPark, '../?groupe=1&panorama_depart=balcon_i8', -4991.04, 127.63, 75.29);
    }


    function redirect(panorama, url, pos1, pos2, pos3) {
        var infoRedirect = new PANOLENS.Infospot(300, PANOLENS.DataImage.Arrow);
        infoRedirect.position.set(pos1, pos2, pos3);
        //        infospot.addHoverText( 'Infospot1');
        infoRedirect.addEventListener("click", () => {
            window.location.href = url;
        });
        panorama.add(infoRedirect);
        viewer.add(panorama);
    }

    function onFocus(avToilette, escalPark, pos1, pos2, pos3, o1, o2, o3) {

        var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Arrow);
        infospot.position.set(pos1, pos2, pos3);
        infospot.addEventListener("click", () => {
            viewer.remove(avToilette);
            viewer.add(escalPark);
            viewer.setPanorama(escalPark);
            if (o1 != null && o2 != null && o3 != null) {
                escalPark.addEventListener('enter-fade-start', function () {
                    viewer.tweenControlCenter(new THREE.Vector3(o1, o2, o3), 0);
                });
            }
        });
        avToilette.add(infospot);
        viewer.add(avToilette);
    }
</script>

<script>
    // Permet de rediriger vers le bon panorama lorsqu'on change de groupe
    <?php
    if(isset($_GET['panorama_depart'])){
    $panorama_depart = $_GET['panorama_depart'];
    switch($panorama_depart){
    case 'escalier_parking':
    ?>
    redirectPanorama('escalier_parking');
    <?php
    break;
    case 'cafet':
    ?>
    redirectPanorama('cafet');
    <?php
    break;
    }
    }else{
    ?>
    redirectPanorama('');
    <?php
    }
    ?>

</script>
</body>

</html>
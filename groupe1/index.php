<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, shrink-to-fit=no">
        <link rel="stylesheet" href="css/style.css">
        <title>Panolens.js GROUPE 1</title>
    </head>

    <body>

    <!-- <div class="credit"><a href="https://github.com/pchen66/panolens.js">Panolens.js</a> image panorama example. Image from <a href="http://adaptivesamples.com/tag/equirectangular/">Adaptive Samples</a></div> -->
    
    <script src="js/three.min.js"></script>
    <script src="js/panolens.min.js"></script>
    <script>
    var field = true;

    //---- Image ----//
    const pic1 =new PANOLENS.ImagePanorama('img/balcon_i8.jpg');
    const pic3 =new PANOLENS.ImagePanorama('img/entree_i8.jpg');
    const pic5 =new PANOLENS.ImagePanorama('img/i16.jpg');
    const pic4 =new PANOLENS.ImagePanorama('img/exterieur_salle_i18.jpg');
    const pic2 =new PANOLENS.ImagePanorama('img/interieur_i8.jpg');
    const pic6=new PANOLENS.ImagePanorama('img/ext_i4.jpg');
    const viewer = new PANOLENS.Viewer({ output : 'console'});

    //----- InfoSpot -----//

    function redirectPanorama(panorama_depart){
        if(panorama_depart == 'ext_i4'){
            onFocus(pic6, pic6, -23.85, -40.80, 4997.15);
        }
        if(panorama_depart == 'exterieur_salle_i18'){
            onFocus(pic4, pic3, -4990.27, 91.75, 116.84);
        }
        if(panorama_depart == 'balcon_i8'){
            onFocus(pic1, pic2, 642.90, -1438.28, 4736.59);
        }

        //------------- balcon i8 -------------//
        //-- balcon i8 -> interieur i8 --//
        onFocus(pic1, pic2, 642.90, -1438.28, 4736.59);

        //------------- interieur i8 -------------//
        //-- interieur i8 -> balcon i8 --//
        onFocus(pic2, pic1, -4981.21, -158.31, 239.80);

        //-- interieur i8 -> entree i8 --//
        onFocus(pic2, pic3, 4966.56, -543.82, -1.82);

        //------------- Entre I8 -------------//
        //entree i8 -> interieur i8
        onFocus(pic3, pic2, 79.71, -520.43, -4965.24);

        //-- I8 --> I4 --//
        onFocus(pic3, pic6, -7000.94, 100.01, 350.15);


        //-- entree i8 -> salle i18 --//
        onFocus(pic3, pic4, 4983.67, -394.06, -13.51);

        //------------- I4 -------------//
        //-- I4  -> I8 --//
        onFocus(pic6, pic3, 4988.82, -233.28, 38.52);


        //------------- extsalle i18 -------------//
        //-- ext i18 -> entree i8 --//
        onFocus(pic4, pic3, -4990.27, 91.75, 116.84);

        //-- ext i18 -> i16 --//
        onFocus(pic4, pic5, -1691.34, -43.57, 4697.31);

        //------------- i16 ------------- //
        //-- i16 -> exterieur i18 --//
        onFocus(pic5, pic4, 891.83, 297.42, -4902.32);


        // Redirection
        //-- balcon i8 -> accueil --//
        redirect(pic1, '../?groupe=3&panorama_depart=secretariat_droit',-4963.64, 138.37, 544.55);
        //-- I4 -> EntreSP --//
        redirect(pic6, '../?groupe=3&panorama_depart=secretariat_gauche', -4996.40, 33.22, -43.73);
        //-- I4 -> Bad --//
        redirect(pic6, '../?groupe=3&panorama_depart=badminton', -23.85, -40.80, 4997.15);
        //-- balcon i8 -> Escalier --/
        redirect(pic1, '../?groupe=2&panorama_depart=escalier_parking', 4952.50, -196.04, -600.44);
        //-- ext i18 -> cafet ---/
        redirect(pic4, '../?groupe=2',4987.65, -277.42, -27.64);
    }





    function onFocus(pic1, pic2, pos1, pos2, pos3) {

    var infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
    infospot.position.set(pos1, pos2, pos3);
    infospot.addEventListener("click", () => {
        viewer.remove(pic1);
        viewer.add(pic2);
        viewer.setPanorama(pic2);
    });
    pic1.add(infospot);
    viewer.add(pic1);
    }

    function redirect(panorama, url, pos1, pos2, pos3) {
        var infoRedirect = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
        infoRedirect.position.set(pos1, pos2, pos3);
        //        infospot.addHoverText( 'Infospot1');
        infoRedirect.addEventListener("click", () => {
            window.location.href=url;
        });
        panorama.add(infoRedirect);
        viewer.add(panorama);
    }

    </script>

    <script>
        // Permet de rediriger vers le bon panorama lorsqu'on change de groupe
        <?php
        if(isset($_GET['panorama_depart'])){
            $panorama_depart = $_GET['panorama_depart'];
            switch($panorama_depart){
                case 'ext_i4':
                        ?>
                    redirectPanorama('ext_i4');
                    <?php
                    break;
                case 'exterieur_salle_i18':
                    ?>
                    redirectPanorama('exterieur_salle_i18');
                    <?php
                    break;
                case 'balcon_i8':
                    ?>
                    redirectPanorama('balcon_i8');
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
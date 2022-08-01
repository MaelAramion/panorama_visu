<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, shrink-to-fit=no">
    <title>TP PANOLENS JS</title>
    <link rel="stylesheet" href="src/css/style.css"/>
  </head>

  <body>

    <!-- <div class="credit"><a href="https://github.com/pchen66/panolens.js">Panolens.js</a> image panorama example. Image from <a href="http://adaptivesamples.com/tag/equirectangular/">Adaptive Samples</a></div> -->
    
    <script src="src/js/lib/three.min.js"></script>
    <script src="src/js/lib/panolens.min.js"></script>
    <script src="src/js/main.js"></script>

    <script>
        // Permet de rediriger vers le bon panorama lorsqu'on change de groupe
        <?php
        if(isset($_GET['panorama_depart'])){
            $panorama_depart = $_GET['panorama_depart'];
            switch($panorama_depart){
                case 'portail':
                    ?>
                    redirectPanorama('portail');
                    <?php
                    break;
                case 'secretariat_droit':
                    ?>
                    redirectPanorama('secretariat_droit');
                    <?php
                    break;
                case 'secretariat_gauche':
                    ?>
                    redirectPanorama('secretariat_gauche');
                    <?php
                    break;
                case 'badminton':
                    ?>
                    redirectPanorama('badminton');
                    <?php
                    break;
            }
        }else{
            ?>
            redirectPanorama('portail');
            <?php
        }
        ?>

    </script>

  </body>
</html>
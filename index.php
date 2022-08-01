<?php
if (isset($_GET['groupe'])) {
    $groupe = $_GET['groupe'];
    if (isset($_GET['panorama_depart'])) {
        $panorama_depart = $_GET['panorama_depart'];
        switch ($groupe) {
            case 1:
                Header('Location: groupe1?panorama_depart=' . $panorama_depart);
                break;
            case 2:
                Header('Location: groupe2?panorama_depart=' . $panorama_depart);
                break;
            case 3:
                Header('Location: groupe3?panorama_depart=' . $panorama_depart);
                break;
        }
    } else {
        switch ($groupe) {
            case 1:
                Header('Location: groupe1');
                break;
            case 2:
                Header('Location: groupe2');
                break;
            case 3:
                Header('Location: groupe3');
                break;
        }
    }
} else {
    Header('Location: groupe3');
}

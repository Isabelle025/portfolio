<?php
    if (isset($_POST['msg'])) {
        $retour = mail('isagrangeret@gmail.com', 'Envoi depuis la page Contact', $_POST['msg'], 'From: webmaster@monsite.fr' . "\r\n" . 'Reply-to: ' . $_POST['email']);           
        if($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    }
    ?>
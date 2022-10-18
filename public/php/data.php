<?php 

$tabProducts = array();   // creation d'un tableau vide pour contenir la liste des produits géneré automatiquement


for ($i = 0; $i<20; $i++){

    $tabproduct = array ( "id_Produit" => uniqid(), // fonction pour generer un identifiant unique
                          "titre_Produit" => "Produit ".($i+1),
                          "prix_produit" => mt_rand (1, 100),
                          "photo_produit" => "public/images/cardImage.svg",
                          "description_produit" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima totam, corporis tenetur maiores fuga incidunt quisquam"

                        );
    array_push($tabProducts, $tabproduct); // remplir le tableau

}
$listProduits = json_encode($tabProducts);
echo $listProduits;


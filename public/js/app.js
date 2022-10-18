
let productList = document.getElementById("app")

var titre = document.createElement("div"); 
    titre.setAttribute("class", "titrePage")
    titre.textContent = "liste des produits"
    productList.appendChild(titre);

fetch('public/php/data.php').then(
    response => response.json().then(
        value =>{
            for (let i = 0; i <= value.length; i++) {

// creer les element du card
var containerElement = document.createElement("div");
    containerElement.setAttribute("class", "container")
    containerElement.setAttribute("id", value[i].id_Produit)
    productList.appendChild(containerElement);

var imageElement = document.createElement("img");
    imageElement.setAttribute("id", "imageId");
    imageElement.setAttribute("class", "logoProduct");
    imageElement.setAttribute("src", "public/images/cardImage.svg");
    imageElement.setAttribute("alt", "photo de produit");
    containerElement.appendChild(imageElement);

var titreElement = document.createElement("h3");
    titreElement.setAttribute("class", "productLibele");
    titreElement.textContent = value[i].titre_Produit;
    containerElement.appendChild(titreElement);

var prixProduit = document.createElement ("h4");
    prixProduit.setAttribute("class", "productPrice");
    prixProduit.textContent = value[i].prix_produit+" euro";
    containerElement.appendChild(prixProduit);

var description = document.createElement("p");
    description.setAttribute("class", "description");
    description.setAttribute("id", "description"+i)
    description.textContent = value[i].description_produit;
    containerElement.appendChild(description);

var boutton = document.createElement('button');
    boutton.setAttribute("class", "seeMore");
    boutton.textContent = "En savoir plus";
    containerElement.appendChild(boutton);



    }}))

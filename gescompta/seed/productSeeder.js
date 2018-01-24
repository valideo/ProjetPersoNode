var Products = require('../models/Products');

var mongoose = require('mongoose');

mongoose.connect('mongodb://projet:projet@ds213118.mlab.com:13118/node_perso')

var products = [

	new Products({
		imagePath : 'images/1_canon-ef-14mm-2.jpg', 
		title: 'Canon EF 14mm',
		description: 'Objectif ultra grand-angle parfait pour les professionnels, le EF 14mm f/2.8L II USM bénéficie d\'une formule optique intégrant 2 éléments en verre UD et 2 lentilles asphériques pour produire une image parfaitement homogène sur l\'ensemble de son vaste champ angulaire.',
		techInformations: 'Angle de champ (horizontal, vertical, diagonal) 81º,104º,114º - Construction optique (lentilles/groupes) 14/11 - Nombre de lamelles du diaphragme 6 - Ouverture minimale 22 - Distance de mise au point minimale (m) 0,2 - Grandissement maximal (x) 0,15',
		comInformations: 'Canon France - SAV : 0699026681 - contact@canonfrance.fr - Retours : 27 rue raoul servant 69007',
		price: 2213,
		deleted: false
		}),
	new Products({
		imagePath : 'images/2_canon-ef-20mm-USM.jpg', 
		title: 'Canon EF 20mm',
		description: 'Avec son grand angle de vue et sa profondeur de champ étendue, l\'EF 20 mm f/2,8 est l\'outil de prédilection des photographes spécialisés dans les paysages, l\'architecture ou les reportages.',
		techInformations: 'Angle de champ (horizontal, vertical, diagonal) 84°, 62°, 94° - Construction optique (lentilles/groupes) 11/9 - Nombre de lamelles du diaphragme 9 - Ouverture minimale 22 - Distance de mise au point minimale (m) 0,25 - Grandissement maximal (x) 0,14',
		comInformations: 'Canon France - SAV : 0699026681 - contact@canonfrance.fr - Retours : 27 rue raoul servant 69007',
		price: 1138,
		deleted: false
		}),
	new Products({
		imagePath : 'images/canon-eos-5ds-r-800x800.jpg', 
		title: 'Canon EOS 5DS R',
		description: 'Reflex numérique conçu pour offrir une qualité d\'image exceptionnelle, avec résolution de 50,6 millions de pixels et sans filtre passe bas pour optimiser la netteté du capteur.',
		techInformations: 'Type CMOS 24 × 36 mm - Nombre de pixels effectifs Environ 50,6 millions de pixels - Nombre total de pixels Environ 53 millions de pixels - Ratio d’aspect 3:2',
		comInformations: 'Canon France - SAV : 0699026681 - contact@canonfrance.fr - Retours : 27 rue raoul servant 69007',
		price: 4350,
		deleted: false
		}),
	new Products({
		imagePath : 'images/canon-eos-1d-x-mark-ii_800x800.jpg', 
		title: 'Canon EOS 1D X',
		description: 'Le EOS-1D X associe vitesse et qualité d\'image, offrant ainsi un appareil photo nouvelle génération destiné aux professionnels.',
		techInformations: 'Type CMOS 24 × 36 mm - Nombre de pixels effectifs Environ 18,1 millions de pixels - Nombre total de pixels Environ Environ 19,3 millions de pixels - Ratio d’aspect 3:2',
		comInformations: 'Canon France - SAV : 0699026681 - contact@canonfrance.fr - Retours : 27 rue raoul servant 69007',
		price: 6180,
		deleted: false
		}),
	new Products({
		imagePath : 'images/nikon_dslr_d850_front_category_page--original.png', 
		title: 'Nikon D850',
		description: 'Ce reflex riche en pixels vient remplacer le Nikon D810 et répondre aux besoins des photographes désireux de disposer d’un boîtier aux performances ultimes capable de produire des images de très haute définition en photo comme en vidéo.',
		techInformations: 'Type CMOS 24 × 36 mm - Nombre de pixels effectifs Environ 21,1 millions de pixels - Nombre total de pixels Environ Environ 13,3 millions de pixels - Ratio d’aspect 3:2',
		comInformations: 'Nikon France - SAV : 0699026681 - contact@nikonfrance.fr - Retours : 25 rue raoul servant 69007',
		price: 2213,
		deleted: false
		}),
	new Products({
		imagePath : 'images/fisheye_nikkor_8mm.png', 
		title: 'Nikon fisheye 8mm',
		description: 'Passez d’une véritable perspective circulaire à une image plein cadre avec le premier zoom fisheye de Nikon. Grâce à sa construction optique avancée, le zoom met en avant une polyvalence remarquable sans pour autant sacrifier la qualité.',
		techInformations: 'Angle de champ 180 à 110° - Construction optique (lentilles/groupes) 15/13 - Nombre de lamelles du diaphragme 7 - Ouverture minimale 22 - Distance de mise au point minimale (m) 0,16 - Grandissement maximal (x) 0,34',
		comInformations: 'Nikon France - SAV : 0699026681 - contact@nikonfrance.fr - Retours : 25 rue raoul servant 69007',
		price: 2213,
		deleted: false
		})
	];

var done = 0;

for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done ++;
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}

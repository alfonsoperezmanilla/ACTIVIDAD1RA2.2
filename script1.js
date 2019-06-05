function iniciar(){
	var elemento=document.getElementById("lienzo");
	lienzo=elemento.getContext("2d");
	
	lienzo.fillStyle="#ffffff";
	lienzo.fillRect(30,30,440,440);
	lienzo.clearRect(45,45,410,410);

	lienzo.strokeStyle="#ffffff"
	lienzo.strokeRect(55,55,390,390);

	lienzo.fillStyle="#ffffff";
	lienzo.fillRect(65,65,370,370);
	lienzo.clearRect(80,80,340,340);

	lienzo.strokeStyle="#ffffff"
	lienzo.strokeRect(90,90,320,320);

	lienzo.fillStyle="#ffffff";
	lienzo.fillRect(100,100,300,300);
	lienzo.clearRect(115,115,270,270);

	lienzo.strokeStyle="#ffffff"
	lienzo.strokeRect(125,125,250,250);

	lienzo.fillStyle="#ffffff";
	lienzo.fillRect(135,135,230,230);
	lienzo.clearRect(150,150,200,200);

	lienzo.strokeStyle="#ffffff"
	lienzo.strokeRect(160,160,180,180);

	lienzo.fillStyle="#ffffff";
	lienzo.fillRect(170,170,160,160);
	lienzo.clearRect(185,185,130,130);

	lienzo.strokeStyle="#ffffff"
	lienzo.strokeRect(195,195,110,110);

}

window.addEventListener("load",iniciar,false);
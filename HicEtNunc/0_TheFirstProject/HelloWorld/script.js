const resize = () => {
    var img = document.createElement("img");
    img.src = './HelloWorld.png';
	img.width = window.innerWidth;
	img.height = window.innerHeight;

    document.body.appendChild(img);

	console.log("Hello World!");
	console.log("");
	console.log("A Dark World...");
	console.log("and");
	console.log("A Bright World...");
	console.log("");
	console.log("Art. Imprinted. Amongst the Stars.");
	console.log("Here is what is mine.");
	console.log("Here is what is yours.");
	console.log("");
	console.log("From the Aether I say HELLO");
	console.log("");
	console.log("WORLD! hear me.");
	console.log("For you hear me now.");
};

window.addEventListener('resize', resize);

resize();
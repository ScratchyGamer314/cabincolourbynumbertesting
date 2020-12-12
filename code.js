

function Colour(r, g, b) {
	this.red = r;
	this.green = g;
	this.blue = b;

	this.equals = function(colour) {
		return (colour.red == this.red && colour.green == this.green && colour.blue == this.blue);
	}

	this.toString = function() {
		return "["+this.red+","+this.green+","+this.blue+"]";
	}
}


function Pallette() {
	var colours = [];

	this.getColours = function() {
		return colours;
	}

	this.addColour = function(colour) {
		colours.push(colour);
	}

	this.colourExists = function(colour) {

	}

	this.loadFromImage = function(image) {
		colours = [];

		var size = image.getSize();

		var image = $("<img>").css({width:size.width, height:size.height, position:"absolute", topq:-1 * size.height, leftq: -1 * size.width}).prop("src", image.toDataURL());

		$("body").append(image);

		var canvas = $("<canvas></canvas>");
		canvas[0].getContext('2d').drawImage(image[0], 0, 0, size.width, size.height);

		var imageData = canvas[0].getContext('2d').getImageData(0, 0, size.width, size.height);
		var pixels = imageData.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pixels.length; i < n; i += 4) {
		    red = pixels[i  ];
		    green = pixels[i+1];
		    blue = pixels[i+2];
		    // i+3 is alpha (the fourth element)
			this.addColour(new Colour(red, green, blue));
		}

		console.log(colours);
	}



	this.toString = function() {
		var str = "";

		for(var i=0; i<colours.length; i++) {
			if (str != "") str += ",";
			str += colours[i].toString();
		}

		return "[" + str + "]";
	}
}

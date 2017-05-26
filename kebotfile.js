var kebot = require( 'kebot' );

kebot.task( { 
	alias : "build",
	command : "babel ./frontend/main.js --watch --presets es2015 --out-file ./dist/js/main.js"
} )
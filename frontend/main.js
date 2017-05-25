// var a = () => console.log(":)");
var app = (()=>{
	let st, dom, catchDom, fn, event, suscribeEvents, initialize;

	st = {
		slider: ".js-slidul",
		controlLeft : ".js-slidul-control-left",
		controlRight : ".js-slidul-control-right"
	}
	dom = {};
	catchDom = ()=>{
		dom.slider = $( st.slider );
		dom.controlLeft = $( st.controlLeft );
		dom.controlRight = $( st.controlRight );
	};
	suscribeEvents = ()=>{
		dom.controlLeft.on( "click", event.onClickPreviousImage );
		dom.controlRight.on( "click", event.onClickNextImage );
	};
	event = {};
	event.onClickPreviousImage = ()=>{
		fn.getPreviousImage();
	};
	event.onClickNextImage = ()=>{
		fn.getNextImage();
	};
	fn = {};
	fn.getPreviousImage = ()=>{
		alert("previous");
	};
	fn.getNextImage = ()=>{
		alert("next");	
	};
	initialize = ()=>{
		catchDom();
		suscribeEvents();
		console.log("[run MOD slidul]");	
	};
	return {
		init : initialize
	}
})()

app.init();
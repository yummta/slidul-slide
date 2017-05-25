"use strict";

// var a = () => console.log(":)");
var app = function () {
	var st = void 0,
	    dom = void 0,
	    catchDom = void 0,
	    fn = void 0,
	    event = void 0,
	    suscribeEvents = void 0,
	    initialize = void 0;

	st = {
		slider: ".js-slidul",
		controlLeft: ".js-slidul-control-left",
		controlRight: ".js-slidul-control-right"
	};
	dom = {};
	catchDom = function catchDom() {
		dom.slider = $(st.slider);
		dom.controlLeft = $(st.controlLeft);
		dom.controlRight = $(st.controlRight);
	};
	suscribeEvents = function suscribeEvents() {
		dom.controlLeft.on("click", event.onClickPreviousImage);
		dom.controlRight.on("click", event.onClickNextImage);
	};
	event = {};
	event.onClickPreviousImage = function () {
		fn.getPreviousImage();
	};
	event.onClickNextImage = function () {
		fn.getNextImage();
	};
	fn = {};
	fn.getPreviousImage = function () {
		alert("previous");
	};
	fn.getNextImage = function () {
		alert("next");
	};
	initialize = function initialize() {
		catchDom();
		suscribeEvents();
		console.log("[run MOD slidul]");
	};
	return {
		init: initialize
	};
}();

app.init();

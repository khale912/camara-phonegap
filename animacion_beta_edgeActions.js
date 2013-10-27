(function($, Edge, compId) {
	var Composition = Edge.Composition,
		Symbol = Edge.Symbol;
	//Edge symbol: 'stage'
	(function(symbolName) {
		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
			var element = sym.$("rectangulo");
			console.log(element[0]);
			clicks = 0;
			sym.stop();
		});
		//Edge binding end
		Symbol.bindElementAction(compId, symbolName, "${_rectangulo}", "click", function(sym, e) {});
		//Edge binding end
		Symbol.bindElementAction(compId, symbolName, "${_Click}", "click", function(sym, e) {

			if(clicks == 0){
				var element = sym.$("rectangulo");
				console.log('Desde adentro');
				console.log(imageData);
				element[0].style.backgroundImage = "url(" + imageData + ")";
			}

			if (clicks < 10) {
				clicks++;
				$(".Stage_Rocket_id").css({
					top: e.pageY - 10,
					left: e.pageX - 100
				});
				sym.getSymbol("Rocket").play();

				function rand(min, max) {
					return Math.floor(Math.random() * (max - min + 1) + min);
				}
			} else if (clicks == 10) {
				console.log("Llegamos a 10!");
				sym.play("humo");
				clicks++;
			} else {
				console.log("LTROLL");
			}
			console.log("click " + clicks);
		});
		//Edge binding end
	})("stage");
	//Edge symbol end:'stage'

	//=========================================================

	//Edge symbol: 'rectangulo'
	(function(symbolName) {})("rectangulo");
	//Edge symbol end:'rectangulo'

	//=========================================================

	//Edge symbol: 'Rocket'
	(function(symbolName) {
		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {});
		//Edge binding end
		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 603, function(sym, e) {});
		//Edge binding end
	})("Rocket");
	//Edge symbol end:'Rocket'
})(jQuery, AdobeEdge, "mi_comp");
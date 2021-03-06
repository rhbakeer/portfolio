const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "cats",
				weight: 12.3
			}, {
				text: "dogs",
				weight: 8
			}, {
				text: "coding",
				weight: 14
			}, {
				text: "building",
				weight: 10
			}, {
				text: "martial arts",
				weight: 7
			}, {
				text: "plants",
				weight: 10
			}, {
				text: "cars",
				weight: 9
			}, { 
				text: "photography",
				weight: 8
			}, {
				text: "love",
				weight: 15
			}, {
				text: "mixology",
				weight: 12
			}, {
				text: "travelling",
				weight: 13
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Photographer", "Lover", "Fighter", "Wanderer", "Plant Enthusiast", "Problem Solver"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

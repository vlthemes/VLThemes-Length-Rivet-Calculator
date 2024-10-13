(function ($) {
	'use strict';

	const inputThickness = $('input[name="thickness"]'),
		selectDiameter = $('select[name="diameter"]'),
		length = $('input[name="length"]');

	function rivet_calculation() {
		const getThickness = parseInt(inputThickness.val()),
			getDiameter = parseFloat(selectDiameter.val()),
			value = getThickness + (getDiameter * 1.2);
		length.val(Math.round(value));
	}

	inputThickness.add(selectDiameter).on('keyup mouseup change', function () {
		rivet_calculation();
	}).trigger('keyup');

	rivet_calculation();

}(jQuery));
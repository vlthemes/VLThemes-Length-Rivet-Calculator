(function ($) {
	'use strict';

	const inputThickness = $('input[name="thickness"]'),
		inputDiameter = $('input[name="diameter"]'),
		length = $('input[name="length"]');

	function rivet_calculation() {
		$('input[type=number]').on('keyup mouseup', function () {
			const getThickness = parseFloat($(this).filter('[name=thickness]').val() ? $(this).filter('[name=thickness]').val() : inputThickness.val()),
				getDiameter = parseFloat($(this).filter('[name=diameter]').val() ? $(this).filter('[name=diameter]').val() : inputDiameter.val()),
				value = getThickness + getDiameter * 1.2;
			length.val((Math.trunc(value * 100) / 100));
		}).trigger('keyup');
	}
	rivet_calculation();

}(jQuery));
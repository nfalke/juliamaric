var juliamaric = juliamaric || {};

juliamaric.contact = {
	init: function () {
		this.bindEvents();
	},

	bindEvents: function () {
		$('.js-contactForm').on('submit', function (event) {
			var thisElement = $(this);

			event.preventDefault();

			$.ajax({
				url: thisElement.attr('action'),
				data: thisElement.serialize()
			}).done(function (response) {
				thisElement.html($(response).find('.js-contactForm').html());
			}).fail(function (response) {
				alert('Någonting gick fel och meddelandet kunde tyvärr inte skickas. Vänligen försök igen.');
			})
		});
	}
}
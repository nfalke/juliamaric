var juliamaric = juliamaric || {};

juliamaric.toggleFooter = {
	defaults: {
		footer: $('.footer'),
		footerOffset: $('.footer').offset()
	},

	init: function () {
		var self = this;

		self.bindEvents(self);
	},

	bindEvents: function (self) {
		window.addEventListener('scroll', function () {
			self.toggler(self);
		});
	},

	toggler: function (self) {

		if (document.body.scrollTop + window.innerHeight >= self.defaults.footerOffset.top) {
			console.log('show');
			self.defaults.footer.find('.footer-content').show();
		} else {
			console.log('hide');
			self.defaults.footer.find('.footer-content').hide();
		}
	}
}
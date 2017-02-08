var juliamaric = juliamaric || {};

juliamaric.accordion = {
	settings: {
		accordion: '.js-accordion',
		toggler: '.js-accordionToggler',
		panel: '.js-accordionPanel'
	},

	init: function () {
		var module = this;

		module.bindEvents(module);
	},

	bindEvents: function (module) {
		var accordions = document.querySelectorAll(module.settings.accordion),
			i;

		for (i = 0; i < accordions.length; i += 1) {
			accordions[i].querySelector(module.settings.toggler).addEventListener('click', function () {
				module.accordion(module, accordions, this.parentElement);
			});
		}
	},

	accordion: function (module, accordions, accordion) {
		var panel = accordion.querySelector(module.settings.panel),
			i;

		// Close others
		for (i = 0; i < accordions.length; i += 1) {
			if (accordions[i] !== accordion) {
				accordions[i].classList.remove('active');
				accordions[i].querySelector(module.settings.panel).style.maxHeight = null;
			}
		}

		// Toggle this
		accordion.classList.toggle('active');

		// Set max height to panel
	    if (panel.style.maxHeight) {
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + 'px';
	    }
	}
}
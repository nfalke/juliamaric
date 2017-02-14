var juliamaric = juliamaric || {};

juliamaric.accordion = {
	settings: {
		event: 'click',
		toggler: '.js-accordionToggler',
		panel: '.js-accordionPanel',
		activeClass: 'is-expanded'
	},

	init: function () {
		var module = this;

		module.bindEvents(module);
	},

	bindEvents: function (module) {
		var togglers = document.querySelectorAll(module.settings.toggler),
			i;

		for (i = 0; i < togglers.length; i += 1) {
			togglers[i].addEventListener(module.settings.event, function (event) {
				event.preventDefault();
				
				module.toggle(module, togglers, this);
			});
		}
	},

	toggle: function (module, togglers, toggler) {
		var panel = toggler.parentNode.nextElementSibling,
			i;

		// Close others
		for (i = 0; i < togglers.length; i += 1) {
			if (togglers[i] !== toggler) {
				togglers[i].parentNode.classList.remove(module.settings.activeClass);
				togglers[i].parentNode.nextElementSibling.style.maxHeight = null;
			}
		}

		// Set active class to change icon (+/-)
		toggler.parentNode.classList.toggle(module.settings.activeClass);

		// Set max height to panel. This makes the pannel toggle.
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	}
}
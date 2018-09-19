	
	const app = {};


	app.showNav = () => {
		$(window).scroll(function () {
			let 
				// hT = $('#services').offset().top,
				hH = $('#services').outerHeight(),
				wH = $(window).height(),
				wS = $(this).scrollTop();
			if (wS > (hH - wH)) {
				$('nav').removeClass('opacityInvisible');
				$('nav').addClass('opacityVisible')
			} else {
				$('nav').addClass('opacityInvisible');
				$('nav').removeClass('opacityVisible')
			}
		});
	}

	app.showOverlay = () => {
		$('.serviceLink').on('click', function(e) {
			e.preventDefault();
			$('.formOverlay').removeClass('hideOverlay');
		})
	}

	app.preventButton = (e) => {
		$('.mainFormButton').on('click', (e) => {
			e.preventDefault();
		})
	}

	app.disableButton = () => {
		$('.overlayButton').on('click', function (e) {
			e.preventDefault();
			$('.formOverlay').addClass('hideOverlay');
		})
	}

	app.hideOverlay =() => {
		$('.overlayIcon').on('click', function (e) {
			e.preventDefault();
			$('.formOverlay').addClass('hideOverlay');
		})
	}

	app.showFirst = () => {
		$('.over1').addClass('no-over');

		$('.blog1pic').click(function () {
			$('.blog-overlay').removeClass('no-over');
			$('.over1').addClass('no-over');
			$('.blog-content').hide();
			$('.blog1').show();
			$('.over1').hide();
			$('.over2').show();
			$('.over3').show();

		})
	}

	app.showSecond = () => {
		$('.blog2pic').click(function () {
			$('.blog-overlay').removeClass('no-over');
			$('.over2').addClass('no-over');
			$('.blog-content').hide();
			$('.blog2').show();
			$('.over2').hide();
			$('.over1').show();
			$('.over3').show();

		})
	}
	
	app.showThird = () => {
		$('.blog3pic').click(function () {
			$('.blog-overlay').removeClass('no-over');
			$('.over3').addClass('no-over');
			$('.blog-content').hide();
			$('.blog3').show();
			$('.over3').hide();
			$('.over1').show();
			$('.over2').show();

		})

	}
	
	app.init = () => {
		app.showNav();
		app.showOverlay();
		app.hideOverlay();
		app.preventButton();
		app.disableButton();
		app.showFirst();
		app.showSecond();
		app.showThird();
	}

	$(function () {
		AOS.init();
		app.init();
	})

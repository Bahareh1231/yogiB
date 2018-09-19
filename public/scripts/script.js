(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.showNav = function () {
	$(window).scroll(function () {
		var
		// hT = $('#services').offset().top,
		hH = $('#services').outerHeight(),
		    wH = $(window).height(),
		    wS = $(this).scrollTop();
		if (wS > hH - wH) {
			$('nav').removeClass('opacityInvisible');
			$('nav').addClass('opacityVisible');
		} else {
			$('nav').addClass('opacityInvisible');
			$('nav').removeClass('opacityVisible');
		}
	});
};

app.showOverlay = function () {
	$('.serviceLink').on('click', function (e) {
		e.preventDefault();
		$('.formOverlay').removeClass('hideOverlay');
	});
};

app.preventButton = function (e) {
	$('.mainFormButton').on('click', function (e) {
		e.preventDefault();
	});
};

app.disableButton = function () {
	$('.overlayButton').on('click', function (e) {
		e.preventDefault();
		$('.formOverlay').addClass('hideOverlay');
	});
};

app.hideOverlay = function () {
	$('.overlayIcon').on('click', function (e) {
		e.preventDefault();
		$('.formOverlay').addClass('hideOverlay');
	});
};

app.showFirst = function () {
	$('.over1').addClass('no-over');

	$('.blog1pic').click(function () {
		$('.blog-overlay').removeClass('no-over');
		$('.over1').addClass('no-over');
		$('.blog-content').hide();
		$('.blog1').show();
		$('.over1').hide();
		$('.over2').show();
		$('.over3').show();
	});
};

app.showSecond = function () {
	$('.blog2pic').click(function () {
		$('.blog-overlay').removeClass('no-over');
		$('.over2').addClass('no-over');
		$('.blog-content').hide();
		$('.blog2').show();
		$('.over2').hide();
		$('.over1').show();
		$('.over3').show();
	});
};

app.showThird = function () {
	$('.blog3pic').click(function () {
		$('.blog-overlay').removeClass('no-over');
		$('.over3').addClass('no-over');
		$('.blog-content').hide();
		$('.blog3').show();
		$('.over3').hide();
		$('.over1').show();
		$('.over2').show();
	});
};

app.init = function () {
	app.showNav();
	app.showOverlay();
	app.hideOverlay();
	app.preventButton();
	app.disableButton();
	app.showFirst();
	app.showSecond();
	app.showThird();
};

$(function () {
	AOS.init();
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NDLElBQU0sTUFBTSxFQUFaOztBQUdBLElBQUksT0FBSixHQUFjLFlBQU07QUFDbkIsR0FBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQzVCO0FBQ0M7QUFDQSxPQUFLLEVBQUUsV0FBRixFQUFlLFdBQWYsRUFGTjtBQUFBLE1BR0MsS0FBSyxFQUFFLE1BQUYsRUFBVSxNQUFWLEVBSE47QUFBQSxNQUlDLEtBQUssRUFBRSxJQUFGLEVBQVEsU0FBUixFQUpOO0FBS0EsTUFBSSxLQUFNLEtBQUssRUFBZixFQUFvQjtBQUNuQixLQUFFLEtBQUYsRUFBUyxXQUFULENBQXFCLGtCQUFyQjtBQUNBLEtBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsZ0JBQWxCO0FBQ0EsR0FIRCxNQUdPO0FBQ04sS0FBRSxLQUFGLEVBQVMsUUFBVCxDQUFrQixrQkFBbEI7QUFDQSxLQUFFLEtBQUYsRUFBUyxXQUFULENBQXFCLGdCQUFyQjtBQUNBO0FBQ0QsRUFiRDtBQWNBLENBZkQ7O0FBaUJBLElBQUksV0FBSixHQUFrQixZQUFNO0FBQ3ZCLEdBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTLENBQVQsRUFBWTtBQUN6QyxJQUFFLGNBQUY7QUFDQSxJQUFFLGNBQUYsRUFBa0IsV0FBbEIsQ0FBOEIsYUFBOUI7QUFDQSxFQUhEO0FBSUEsQ0FMRDs7QUFPQSxJQUFJLGFBQUosR0FBb0IsVUFBQyxDQUFELEVBQU87QUFDMUIsR0FBRSxpQkFBRixFQUFxQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxVQUFDLENBQUQsRUFBTztBQUN2QyxJQUFFLGNBQUY7QUFDQSxFQUZEO0FBR0EsQ0FKRDs7QUFNQSxJQUFJLGFBQUosR0FBb0IsWUFBTTtBQUN6QixHQUFFLGdCQUFGLEVBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVUsQ0FBVixFQUFhO0FBQzVDLElBQUUsY0FBRjtBQUNBLElBQUUsY0FBRixFQUFrQixRQUFsQixDQUEyQixhQUEzQjtBQUNBLEVBSEQ7QUFJQSxDQUxEOztBQU9BLElBQUksV0FBSixHQUFpQixZQUFNO0FBQ3RCLEdBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFVLENBQVYsRUFBYTtBQUMxQyxJQUFFLGNBQUY7QUFDQSxJQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBMkIsYUFBM0I7QUFDQSxFQUhEO0FBSUEsQ0FMRDs7QUFPQSxJQUFJLFNBQUosR0FBZ0IsWUFBTTtBQUNyQixHQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFNBQXJCOztBQUVBLEdBQUUsV0FBRixFQUFlLEtBQWYsQ0FBcUIsWUFBWTtBQUNoQyxJQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsU0FBL0I7QUFDQSxJQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFNBQXJCO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUNBLElBQUUsUUFBRixFQUFZLElBQVo7QUFDQSxJQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUVBLEVBVEQ7QUFVQSxDQWJEOztBQWVBLElBQUksVUFBSixHQUFpQixZQUFNO0FBQ3RCLEdBQUUsV0FBRixFQUFlLEtBQWYsQ0FBcUIsWUFBWTtBQUNoQyxJQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsU0FBL0I7QUFDQSxJQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFNBQXJCO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUNBLElBQUUsUUFBRixFQUFZLElBQVo7QUFDQSxJQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUVBLEVBVEQ7QUFVQSxDQVhEOztBQWFBLElBQUksU0FBSixHQUFnQixZQUFNO0FBQ3JCLEdBQUUsV0FBRixFQUFlLEtBQWYsQ0FBcUIsWUFBWTtBQUNoQyxJQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0IsU0FBL0I7QUFDQSxJQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFNBQXJCO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUNBLElBQUUsUUFBRixFQUFZLElBQVo7QUFDQSxJQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsSUFBRSxRQUFGLEVBQVksSUFBWjtBQUVBLEVBVEQ7QUFXQSxDQVpEOztBQWNBLElBQUksSUFBSixHQUFXLFlBQU07QUFDaEIsS0FBSSxPQUFKO0FBQ0EsS0FBSSxXQUFKO0FBQ0EsS0FBSSxXQUFKO0FBQ0EsS0FBSSxhQUFKO0FBQ0EsS0FBSSxhQUFKO0FBQ0EsS0FBSSxTQUFKO0FBQ0EsS0FBSSxVQUFKO0FBQ0EsS0FBSSxTQUFKO0FBQ0EsQ0FURDs7QUFXQSxFQUFFLFlBQVk7QUFDYixLQUFJLElBQUo7QUFDQSxLQUFJLElBQUo7QUFDQSxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHRcblx0Y29uc3QgYXBwID0ge307XG5cblxuXHRhcHAuc2hvd05hdiA9ICgpID0+IHtcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBcblx0XHRcdFx0Ly8gaFQgPSAkKCcjc2VydmljZXMnKS5vZmZzZXQoKS50b3AsXG5cdFx0XHRcdGhIID0gJCgnI3NlcnZpY2VzJykub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0d0ggPSAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdHdTID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblx0XHRcdGlmICh3UyA+IChoSCAtIHdIKSkge1xuXHRcdFx0XHQkKCduYXYnKS5yZW1vdmVDbGFzcygnb3BhY2l0eUludmlzaWJsZScpO1xuXHRcdFx0XHQkKCduYXYnKS5hZGRDbGFzcygnb3BhY2l0eVZpc2libGUnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ29wYWNpdHlJbnZpc2libGUnKTtcblx0XHRcdFx0JCgnbmF2JykucmVtb3ZlQ2xhc3MoJ29wYWNpdHlWaXNpYmxlJylcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGFwcC5zaG93T3ZlcmxheSA9ICgpID0+IHtcblx0XHQkKCcuc2VydmljZUxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCcuZm9ybU92ZXJsYXknKS5yZW1vdmVDbGFzcygnaGlkZU92ZXJsYXknKTtcblx0XHR9KVxuXHR9XG5cblx0YXBwLnByZXZlbnRCdXR0b24gPSAoZSkgPT4ge1xuXHRcdCQoJy5tYWluRm9ybUJ1dHRvbicpLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblx0fVxuXG5cdGFwcC5kaXNhYmxlQnV0dG9uID0gKCkgPT4ge1xuXHRcdCQoJy5vdmVybGF5QnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJy5mb3JtT3ZlcmxheScpLmFkZENsYXNzKCdoaWRlT3ZlcmxheScpO1xuXHRcdH0pXG5cdH1cblxuXHRhcHAuaGlkZU92ZXJsYXkgPSgpID0+IHtcblx0XHQkKCcub3ZlcmxheUljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JCgnLmZvcm1PdmVybGF5JykuYWRkQ2xhc3MoJ2hpZGVPdmVybGF5Jyk7XG5cdFx0fSlcblx0fVxuXG5cdGFwcC5zaG93Rmlyc3QgPSAoKSA9PiB7XG5cdFx0JCgnLm92ZXIxJykuYWRkQ2xhc3MoJ25vLW92ZXInKTtcblxuXHRcdCQoJy5ibG9nMXBpYycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5ibG9nLW92ZXJsYXknKS5yZW1vdmVDbGFzcygnbm8tb3ZlcicpO1xuXHRcdFx0JCgnLm92ZXIxJykuYWRkQ2xhc3MoJ25vLW92ZXInKTtcblx0XHRcdCQoJy5ibG9nLWNvbnRlbnQnKS5oaWRlKCk7XG5cdFx0XHQkKCcuYmxvZzEnKS5zaG93KCk7XG5cdFx0XHQkKCcub3ZlcjEnKS5oaWRlKCk7XG5cdFx0XHQkKCcub3ZlcjInKS5zaG93KCk7XG5cdFx0XHQkKCcub3ZlcjMnKS5zaG93KCk7XG5cblx0XHR9KVxuXHR9XG5cblx0YXBwLnNob3dTZWNvbmQgPSAoKSA9PiB7XG5cdFx0JCgnLmJsb2cycGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnLmJsb2ctb3ZlcmxheScpLnJlbW92ZUNsYXNzKCduby1vdmVyJyk7XG5cdFx0XHQkKCcub3ZlcjInKS5hZGRDbGFzcygnbm8tb3ZlcicpO1xuXHRcdFx0JCgnLmJsb2ctY29udGVudCcpLmhpZGUoKTtcblx0XHRcdCQoJy5ibG9nMicpLnNob3coKTtcblx0XHRcdCQoJy5vdmVyMicpLmhpZGUoKTtcblx0XHRcdCQoJy5vdmVyMScpLnNob3coKTtcblx0XHRcdCQoJy5vdmVyMycpLnNob3coKTtcblxuXHRcdH0pXG5cdH1cblx0XG5cdGFwcC5zaG93VGhpcmQgPSAoKSA9PiB7XG5cdFx0JCgnLmJsb2czcGljJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnLmJsb2ctb3ZlcmxheScpLnJlbW92ZUNsYXNzKCduby1vdmVyJyk7XG5cdFx0XHQkKCcub3ZlcjMnKS5hZGRDbGFzcygnbm8tb3ZlcicpO1xuXHRcdFx0JCgnLmJsb2ctY29udGVudCcpLmhpZGUoKTtcblx0XHRcdCQoJy5ibG9nMycpLnNob3coKTtcblx0XHRcdCQoJy5vdmVyMycpLmhpZGUoKTtcblx0XHRcdCQoJy5vdmVyMScpLnNob3coKTtcblx0XHRcdCQoJy5vdmVyMicpLnNob3coKTtcblxuXHRcdH0pXG5cblx0fVxuXHRcblx0YXBwLmluaXQgPSAoKSA9PiB7XG5cdFx0YXBwLnNob3dOYXYoKTtcblx0XHRhcHAuc2hvd092ZXJsYXkoKTtcblx0XHRhcHAuaGlkZU92ZXJsYXkoKTtcblx0XHRhcHAucHJldmVudEJ1dHRvbigpO1xuXHRcdGFwcC5kaXNhYmxlQnV0dG9uKCk7XG5cdFx0YXBwLnNob3dGaXJzdCgpO1xuXHRcdGFwcC5zaG93U2Vjb25kKCk7XG5cdFx0YXBwLnNob3dUaGlyZCgpO1xuXHR9XG5cblx0JChmdW5jdGlvbiAoKSB7XG5cdFx0QU9TLmluaXQoKTtcblx0XHRhcHAuaW5pdCgpO1xuXHR9KVxuIl19

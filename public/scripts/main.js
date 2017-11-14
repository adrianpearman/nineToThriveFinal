(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {};

app.menu = function () {
  $('.burger').on('click', function () {
    if ($('.burger').hasClass('active')) {
      $('.navItem').fadeOut();
      $('.burger').toggleClass('active');
    } else {
      $('.navItem').fadeIn();
      $('.burger').toggleClass('active');
    }
  });
};

app.sticky = function () {
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll > 800) {
      $('.menu').addClass('sticky gradient');
    } else {
      $('.menu').removeClass('sticky gradient');
    }
  });
};

// window.addEventListener("hashchange", offsetAnchor);
//
// app.offsetAnchor = () => {
//   if (location.hash.length !==0) {
//     window.scrollTo(window.scrollX, window.scrollY - 100);
//   }
// }


app.init = function () {
  app.menu();
  app.sticky();
  // app.offsetAnchor();
};

$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sRUFBVjs7QUFHQSxJQUFJLElBQUosR0FBVyxZQUFLO0FBQ2QsSUFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFJO0FBQzNCLFFBQUksRUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixRQUF0QixDQUFKLEVBQW9DO0FBQ2xDLFFBQUUsVUFBRixFQUFjLE9BQWQ7QUFDQSxRQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLFFBQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsUUFBRSxVQUFGLEVBQWMsTUFBZDtBQUNBLFFBQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsUUFBekI7QUFDRDtBQUNGLEdBUkQ7QUFTRCxDQVZEOztBQVlBLElBQUksTUFBSixHQUFhLFlBQUs7QUFDaEIsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBSTtBQUN6QixRQUFJLFNBQVMsRUFBRSxNQUFGLEVBQVUsU0FBVixFQUFiO0FBQ0EsUUFBSSxTQUFTLEdBQWIsRUFBaUI7QUFDZixRQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLGlCQUFwQjtBQUNELEtBRkQsTUFFTztBQUNMLFFBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsaUJBQXZCO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBSSxJQUFKLEdBQVcsWUFBSztBQUNkLE1BQUksSUFBSjtBQUNBLE1BQUksTUFBSjtBQUNBO0FBQ0QsQ0FKRDs7QUFNQSxFQUFFLFlBQVU7QUFDVixNQUFJLElBQUo7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhcHAgPSB7fTtcblxuXG5hcHAubWVudSA9ICgpPT4ge1xuICAkKCcuYnVyZ2VyJykub24oJ2NsaWNrJywgKCk9PntcbiAgICBpZiAoJCgnLmJ1cmdlcicpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAkKCcubmF2SXRlbScpLmZhZGVPdXQoKTtcbiAgICAgICQoJy5idXJnZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXZJdGVtJykuZmFkZUluKCk7XG4gICAgICAkKCcuYnVyZ2VyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmFwcC5zdGlja3kgPSAoKT0+IHtcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoKT0+e1xuICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgaWYgKHNjcm9sbCA+IDgwMCl7XG4gICAgICAkKCcubWVudScpLmFkZENsYXNzKCdzdGlja3kgZ3JhZGllbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnc3RpY2t5IGdyYWRpZW50Jyk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9mZnNldEFuY2hvcik7XG4vL1xuLy8gYXBwLm9mZnNldEFuY2hvciA9ICgpID0+IHtcbi8vICAgaWYgKGxvY2F0aW9uLmhhc2gubGVuZ3RoICE9PTApIHtcbi8vICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZIC0gMTAwKTtcbi8vICAgfVxuLy8gfVxuXG5cblxuYXBwLmluaXQgPSAoKT0+IHtcbiAgYXBwLm1lbnUoKTtcbiAgYXBwLnN0aWNreSgpO1xuICAvLyBhcHAub2Zmc2V0QW5jaG9yKCk7XG59XG5cbiQoZnVuY3Rpb24oKXtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIl19

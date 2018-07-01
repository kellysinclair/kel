import styles from './../css/main.css';
import Isotope from 'isotope-layout';
var $ = require('jquery/src/jquery');

$( document ).ready(function() {

  var iso = new Isotope( '.my-work', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $('.filter-button').on( 'click', function() {
    var filterValue = $( this ).attr('data-filter');
    iso.arrange({ filter: filterValue });
  });

	$('.grid img:nth-child(n + 2)').click(function() {
    var thmb = this; 
    var src = this.src;
    	$('.grid img:nth-child(1)').fadeOut(200,function(){
        	thmb.src = this.src;
        	$(this).fadeIn(200)[0].src = src;
    	});
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
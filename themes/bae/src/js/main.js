import styles from './../css/main.css';
var $ = require('jquery/src/jquery');

$( document ).ready(function() {

  const filterButtons = $('.filter-button');

  filterButtons.on( 'click', function() {
    const button = $(this)
    const filterValue = button.attr('data-filter');
    filterButtons.removeClass('is-active')
    button.addClass('is-active')
    $(`.grid-item:not(${filterValue})`).hide();
    $(`.grid-item${filterValue}`).fadeIn();
  });


  $(".filter-button").hover(function(){
  $(this).css("opacity", "0.8");
        }, function(){
        $(this).css("opacity", "1");
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
import styles from './../css/main.css';
var $ = require('jquery/src/jquery');

import Flickity from 'flickity';

$( document ).ready(function() {

	$('.grid img:nth-child(n + 2)').click(function() {
    var thmb = this; 
    var src = this.src;
    	$('.grid img:nth-child(1)').fadeOut(200,function(){
        	thmb.src = this.src;
        	$(this).fadeIn(200)[0].src = src;
    	});
	});
});

// let flickity = new Flickity('.slider', {
// 	initialIndex: 2,
// 	wrapAround: true,
// });

// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');

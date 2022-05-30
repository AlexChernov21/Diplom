$(document).ready(function() {

	$(".navbar-brand").hover(
		function() {
			$('.utka').addClass("show");
		},
		function() {
			$('.utka').removeClass("show")

		}
	);

	let btn = document.querySelector('#btn1');
	let el = document.querySelector('.why_section');
	btn.addEventListener('click', function() {
		el.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	let btn2 = document.querySelector('#btn2');
	let el2 = document.querySelector('.arrival_section');
	btn2.addEventListener('click', function() {
		el2.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	let btn3 = document.querySelector('#btn3');
	let el3 = document.querySelector('.product_section');
	btn3.addEventListener('click', function() {
		el3.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	let btn4 = document.querySelector('#btn4');
	let el4 = document.querySelector('.client_section');
	btn4.addEventListener('click', function() {
		el4.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	let btn5 = document.querySelector('#btn5');
	let el5 = document.querySelector('.video-block');
	btn5.addEventListener('click', function() {
		el5.scrollIntoView({ block: "center", behavior: "smooth" });
	});

	let btn6 = document.querySelector('#btn6');
	let el6 = document.querySelector('footer');
	btn6.addEventListener('click', function() {
		el6.scrollIntoView({ block: "center", behavior: "smooth" });
	});

});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
	loop: true,
	margin: 0,
	dots: false,
	nav: true,
	navText: [],
	autoplay: true,
	autoplayHoverPause: true,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
	],
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		1000: {
			items: 2
		}
	}
});

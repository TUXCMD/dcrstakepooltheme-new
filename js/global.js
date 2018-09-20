$('.menu-trigger').on('click', function(){
   $(this).toggleClass('active');
});

$('.main-carousel').flickity({
	cellAlign: 'left',
	contain: true,
	wrapAround: true,
	arrowShape: {
		x0: 10,
		x1: 60, y1: 50,
		x2: 60, y2: 40,
		x3: 60
	}
});

$(document).ready(function () {
	$('#dtVerticalScroll').DataTable({
		"scrollY": "291px",
		"scrollCollapse": true,
		"paging": false,
		"searching": false,
		"info": false,
	});
	$('.dataTables_length').addClass('bs-select');
});
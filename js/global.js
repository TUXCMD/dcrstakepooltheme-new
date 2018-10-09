$('#dismiss').on('click', function () {
    $('#sidebar, .menu-trigger').removeClass('active');
});

$('#sidebarCollapse').on('click', function () {
    $('#sidebar, .menu-trigger').addClass('active');
});

$("#select_all").click(function(){

    if ($("input[type='checkbox']").prop("checked")) {
        $(':checkbox').prop('checked', false);
        $(this).text('Select all');
    }
    else {
        $(':checkbox').prop('checked', true);
        $(this).text('Deselect all');
    }    

 });

$(function() {
    $('td:last-child input').change(function() {
        $(this).closest('tr').toggleClass("bg-checked", this.checked);
	});
});


$(document).ready(function () {
	$('.dtVerticalScroll').DataTable({
		"scrollY": "251px",
		"scrollX": true,
		"scrollCollapse": true,
		"paging": false,
		"searching": false,
		"info": false
	});
	$('.dataTables_length').addClass('bs-select');
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

$(document).ready(function() {
  $('.dot').tooltip({
    placement: 'top',
    trigger: 'hover',
    width: '100px',
    title: 'What are tickets?'
  });
});

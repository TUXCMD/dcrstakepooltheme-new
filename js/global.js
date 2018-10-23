$('#dismiss').on('click', function () {
    $('#sidebar, .menu-trigger').removeClass('active');
});

$('#sidebarCollapse').on('click', function () {
    $('#sidebar, .menu-trigger').addClass('active');
});

function submitState(el) {

    var $form = $(el),
        $requiredInputs = $form.find('input:required'),
        $submit = $form.find('input[type="submit"]');

    $submit.attr('disabled', 'disabled');

    $requiredInputs.keyup(function () {

      $form.data('empty', 'false');

      $requiredInputs.each(function() {
        if ($(this).val() === '') {
          $form.data('empty', 'true');
        }
      });

      if ($form.data('empty') === 'true') {
        $submit.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
      } else {
        $submit.removeAttr('disabled').attr('title', 'click to submit');
      }
    });
  }
submitState('#Login');
submitState('#Register');
submitState('#Password');

$("#select_all").click(function(){

    if ($("input[type='checkbox']").prop("checked")) {
        $(':checkbox').prop('checked', false);
        $('table tr').removeClass('bg-checked');
        $(this).text('Select all');
        $('.update-btn').removeClass("d-flex");
    }
    else {
        $(':checkbox').prop('checked', true);
        $('table tr').addClass('bg-checked');
        $(this).text('Discard all');
        $('.update-btn').addClass('d-flex');
    }    

 });

$(function() {
    $('td:last-child input').change(function() {
        $(this).closest('tr').toggleClass("bg-checked", this.checked);
	});
});


$('.control-checkbox input').change(function () {
  if ($(this).is(":checked")) {
    $('.update-btn').addClass("d-flex");
  } else {
      var flag=0;
      $('.control-checkbox input').each(function(){
          if ($(this).is(":checked")) {
              $('.update-btn').addClass("d-flex");
            flag=1;             
          }
          if(flag == 0){
              $('.update-btn').removeClass('d-flex');
          }
      });
  }
});

$('.form-check-input').change(function () {
  if ($(this).is(":checked")) {
    $('.update-btn').addClass("d-flex");
  } else {
      var flag=0;
      $('.form-check-input').each(function(){
          if ($(this).is(":checked")) {
              $('.update-btn').addClass("d-flex");
            flag=1;             
          }
          if(flag == 0){
              $('.update-btn').removeClass('d-flex');
          }
      });
  }
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

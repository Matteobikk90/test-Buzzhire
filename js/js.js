$(document).ready(function(){

	$('.standard').hover(
		function(){
			$(this).find('.caption').show();
		},
		function(){
			$(this).find('.caption').hide();
		}
	);

	$("#submit").submit(function() {

		var comment = $("#comment").val();

		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),

			success: function(data) {
				$("#result").append("</br>" + comment);
			}
		})

	});

});
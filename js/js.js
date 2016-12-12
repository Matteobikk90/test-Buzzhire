$(document).ready(function(){

	$('.standard').hover(
		function(){
			$(this).find('.caption').show();
		},
		function(){
			$(this).find('.caption').hide();
		}
	);

	$("#submit").click(function(event) {

		event.preventDefault();

		var userName = $("#user").val();
		var comment = $("#comment").val();

		$.ajax({
			type: 'POST',
			url: url,
			data: data,

			success: function(data) {
				$("#commentPost").html(userName + "<br>" + comment);
				
			}
		})

	});

});
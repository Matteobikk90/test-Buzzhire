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
		// var userNameBox = $("<p></p>").text(userName);
		// var commentBox = $("<h4></h4>").text(comment);

		$.ajax({
			type: 'POST',
			url: 'https://buzzhire.herokuapp.com/barmans.html',
			data: $(this).serialize(),

			success: function(data) {
				$("#commentPost").html(userName + "<br>" + comment);
				
			}
		})

	});

});
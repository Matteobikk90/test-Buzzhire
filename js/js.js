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
			url: 'https://buzzhire.herokuapp.com/barmans.html',
			data: $(this).serialize(),

			success: function(data) {

				var userNameBox = $("<p></p>").text(userName);
		        var commentBox = $("<h4></h4>").text(comment);

				$(userNameBox).html(userName);
				$(commentBox).html(comment);
				
			}
		})

	});

// 	function addNewItem(list, userName, comment) {

// 	var listComment = document.createElement("p");
// 	var listUser = document.createElement("h4");

// 	listComment.innerText = comment;
// 	listUser.innerText = userName;
 
// 	list.appendChild(listComment, listUser);

// }; 

});
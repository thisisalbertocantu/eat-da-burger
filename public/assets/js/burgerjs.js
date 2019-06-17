$(function () {
    $(".create-form").on("submit", function (event) {
        console.log("----------form");
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                location.reload();
            }
        )
    });

    $(".eat-btn").on("click", function (event) {

        var id = $(this).data("id");
        var burgerStatus = {
			devoured: 1
		};

        console.log("devouring burger with id " + id);
        $.ajax("/" + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function () {
                location.reload();
            }
        )
    });
});
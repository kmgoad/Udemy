// $("h1").addClass("big-title margin-50");
// // $("h1").removeClass("big-title");
// // $("h1").hasClass("margin-50");
// // $("h1").text("bye");

// $("button").html("<em>Hey</em>");

// $("img").attr("src");
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });


// $("button").click(function() {
//     $("h1").css("color", "purple");
// });


// $(document).keypress(function(event) {
//     // console.log(event.key);
//     $("h1").text(event.key);
// })


$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});
$("h1").on("mouseleave", function() {
    $("h1").css("color", "yellow");
});

$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");

$("button").click(function() {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin: 20 /* "20%" */});
    $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: "20%"});
});

// $("button").remove();
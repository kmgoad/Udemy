$(".education-details").slideUp();
$(".work-organization").slideUp();
$(".project").slideUp();
$(".tech-skills").slideUp();
$(".soft-skills").slideUp();
$(".award").slideUp();

$(".education-container h1").click(function() {
    $(".education-details").slideToggle();
    document.querySelector("#education-arrow").classList.toggle("expanded");
    
});

$(".work-container h1").click(function() {
    $(".work-organization").slideToggle();
    document.querySelector("#work-arrow").classList.toggle("expanded");
});

$(".project-container h1").click(function() {
    $(".project").slideToggle();
    document.querySelector("#projects-arrow").classList.toggle("expanded");
});

$(".tech-container h1").click(function() {
    $(".tech-skills").slideToggle();
    document.querySelector("#tech-arrow").classList.toggle("expanded");
});
$(".soft-container h1").click(function() {
    $(".soft-skills").slideToggle();
    document.querySelector("#soft-arrow").classList.toggle("expanded");
});
$(".awards-container h1").click(function() {
    $(".award").slideToggle();
    document.querySelector("#awards-arrow").classList.toggle("expanded");
});

$("#revmixer-repo").on("click", function(e) {
    e.preventDefault();
    var win = open('https://github.com/rjhakes/RevMixer-Frontend');
    var newWin = open('https://github.com/rjhakes/Project-Service');
    if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
    { 
        win.close();
        alert("Allow popups to open repos in new tab.");
    }
    open('https://github.com/rjhakes/Music-Service');
    open('https://github.com/rjhakes/User-Service');
});

$("#givhub-repo").on("click", function(e) {
    e.preventDefault();
    var win = open("https://github.com/rjhakes/GivHub-By-SHRKD-Angular");
    var newWin = open("https://github.com/rjhakes/GivHub-By-SHRKD");
    if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
    { 
        win.close();
        alert("Allow popups to open repos in new tab.");
    }
});

$("#webStore-repo").on("click", function(e) {
    e.preventDefault();
    var win = open("https://github.com/rjhakes/Rich_Hakes-P1");
});


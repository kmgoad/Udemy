// alert(document.body.innerHTML);

// let original_width = 0;
// let original_height = 0;
// let original_x = 0;
// let original_y = 0;
// let original_mouse_x = 0;
// let original_mouse_y = 0;
const minimum_size = 20;
let original_width = 0;
let original_height = 0;
let original_x = 0;
let original_y = 0;
let original_mouse_x = 0;
let original_mouse_y = 0;

$(".w-resizer").on("mousedown", function(e) {
    e.preventDefault();
    original_x = $(".w-resizer").offset().left;
    original_y = $(".w-resizer").offset().top;
    original_mouse_x = e.pageX;
    original_mouse_y = e.pageY;
    window.addEventListener('mousemove', resizeW);
    window.addEventListener('mouseup', stopResize)
});

$(".v-resizer").on("mousedown", function(e) {
    e.preventDefault();
    original_x = $(".v-resizer").offset().left;
    original_y = $(".v-resizer").offset().top;
    original_mouse_x = e.pageX;
    original_mouse_y = e.pageY;
    window.addEventListener('mousemove', resizeH);
    window.addEventListener('mouseup', stopResize)
});

function resizeW(e) {
    console.log(e);
    $(".w-resizable-l").width(e.pageX);
    $(".w-resizer").css("left", e.pageX);
    $(".w-resizable-r").css("left", e.pageX + 3).width($(window).width() - e.pageX+3);
}
function resizeH(e) {
    $(".v-resizable-t").height(e.pageY);
    // $(".v-resizer").css("top", e.pageY);
    $(".v-resizable-b").height($(window).height() - e.pageY+3);
}
function stopResize() {
    window.removeEventListener('mousemove', resizeW);
    window.removeEventListener('mousemove', resizeH);
}
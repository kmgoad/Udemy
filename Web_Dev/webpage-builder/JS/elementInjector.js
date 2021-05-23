// alert(document.body.innerHTML);
// alert(document.querySelector(".document-container").innerHTML);

// get all document-container elements
function buildStructure() {
    document.querySelectorAll('.structure-div p').forEach((element) => element.remove());
    $("*", document.querySelector(".document-container")).each(function(i) {
        let caption = document.createElement('p');
        caption.textContent = "<"+this.nodeName+">"; 
        caption.id = "eI_" + i;
        let span = document.createElement('span');
        document.querySelector(".structure-div").appendChild(caption);
        $("#"+caption.id).css("margin","0");
        $("#"+caption.id).width("10%");
        let m = 0;
        $(this).parents().each(function() {
            m += 15;
        })
        m -= 45;
        $("#"+caption.id).css("margin-left", m);
        $("#"+caption.id).on("mouseover", function() {
            $(this).css("color", "cyan");
        });
        $("#"+caption.id).click(function() {
            [].forEach.call(document.querySelectorAll(".structure-selected"), function(e) {
                if (caption.id != e.id)
                {
                    $(e).removeClass("structure-selected");
                    $(e).css("color", "");
                    $("*", document.querySelector(".document-container")).children().prevObject[i].classList.toggle("structure-selected");
                }
            })
            document.querySelector("#"+caption.id).classList.toggle("structure-selected");
            $("*", document.querySelector(".document-container")).children().prevObject[i].classList.toggle("structure-selected");
        });
        $("#"+caption.id).on("mouseleave", function() {
            if (!document.querySelector("#"+caption.id).classList.contains("structure-selected"))
            {
                $(this).css("color", $(this).parent().css("color"));
            }
        });
    });
}

buildStructure();

// get element clicked on
$( "*", document.querySelector(".document-container") ).click(function( event ) {
    event.stopPropagation();
    var domElement = $( this ).get( 0 );
    // console.log(domElement.innerHTML));
});

$(".add-btn").click(function() {
    $(".add-dropdown-menu").toggle();
    
});

$( "*", document.querySelector(".col1") ).click(function( event ) {
    event.stopPropagation();
    var domElement = $( this ).get( 0 );
    var newE1 = document.createElement(domElement.innerHTML);
    var newE2 = document.createElement(domElement.innerHTML);
    newE1.textContent = "<"+newE1.nodeName+">";
    document.querySelector(".structure-container").querySelector(".structure-selected").appendChild(newE1);
    newE2.textContent = "<"+newE1.nodeName+">";
    document.querySelector(".document-container").querySelector(".structure-selected").appendChild(newE2);
    buildStructure();
    clearSelection();
});

$( "*", document.querySelector(".col2") ).click(function( event ) {
    event.stopPropagation();
    var domElement = $( this ).get( 0 );
    var newE1 = document.createElement(domElement.innerHTML);
    var newE2 = document.createElement(domElement.innerHTML);
    newE1.textContent = "<"+newE1.nodeName+">"
    document.querySelector(".structure-container").querySelector(".structure-selected").appendChild(newE1);
    newE2.textContent = "new Element";
    document.querySelector(".document-container").querySelector(".structure-selected").appendChild(newE2);
    buildStructure();
    clearSelection();
});

function clearSelection() {
    // [].forEach.call(document.querySelectorAll(".structure-selected"), function(e) {
    //     $(e).removeClass(".structure-selected");
    // })
    document.querySelector(".document-container").querySelector(".structure-selected").classList.toggle("structure-selected");

    document.querySelector(".structure-container").querySelector(".structure-selected").classList.toggle("structure-selected");
    // document.querySelector(".document-container").querySelector(".structure-selected").classList.toggle(".structure-selected");
}
// class inclick for navItems
    function addClass(Element){
        const items = document.querySelectorAll(".navitems")
        items.forEach(navitems => {
            navitems.classList.remove("navitemsClick")
        });
        Element.classList.add("navitemsClick")
    }
    console.log("nikan")

//salegame Slider

let position = 0;

const next = document.getElementById("salegameright")
next.addEventListener("click", function() {
    if ( position > -2300 ) {
        position = position - 1190;
        saleGameSlider.style.left = position + "px";
    }       
    else if (position == -2380){
        position = 0;
        saleGameSlider.style.left = position + "px";
    }
})

const prev = document.getElementById("salegameleft")
prev.addEventListener("click", function() {
    if ( position < 0 ) {
        position = position + 1190;
        saleGameSlider.style.left = position + "px";
    }       
    else if (position == 0){
        position = position - 2380;
        saleGameSlider.style.left = position + "px";
    }
})

//

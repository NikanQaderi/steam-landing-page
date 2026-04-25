// class inclick for navItems
    function addClass(Element){
        const items = document.querySelectorAll(".navitems")
        items.forEach(navitems => {
            navitems.classList.remove("navitemsClick")
        });
        Element.classList.add("navitemsClick")
    }
 
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

//thumbs
function addClass(Element){
        const items = document.querySelectorAll(".navitems")
        items.forEach(navitems => {
            navitems.classList.remove("navitemsClick")
        });
        Element.classList.add("navitemsClick")
    }

    //featuredSlider

    let featuredPosition = 0;

    const featurenext = document.getElementById("featuregameright")
    featurenext.addEventListener("click",function(){
        if(featuredPosition > -3870){
            featuredPosition = featuredPosition - 1292;
            featuredSlider.style.left = featuredPosition + "px";
        }
        else if (featuredPosition < -3870 ){
            featuredPosition = 0;
            featuredSlider.style.left = featuredPosition + "px";
        }
    })
        const featureprev = document.getElementById("featuregameleft")
    featureprev.addEventListener("click",function(){
        if(featuredPosition < 0){
            featuredPosition = featuredPosition + 1292;
            featuredSlider.style.left = featuredPosition + "px";
        }
        else if (featuredPosition == 0 ){
            featuredPosition = -3876;
            featuredSlider.style.left = featuredPosition + "px";
        }
    })



const categoryContainer = document.getElementById("categorySliderContainer");
let isDragging = false;
let moveInX;
let scrollLeft;
categoryContainer.addEventListener("mousedown", (element) => {
    isDragging = true;
    categoryContainer.classList.add("dragging");
    moveInX = element.pageX - categoryContainer.offsetLeft;
    scrollLeft = categoryContainer.scrollLeft;
    element.preventDefault();
});
categoryContainer.addEventListener("mousemove", (element) => {
    if (!isDragging) return; 
    const x = element.pageX - categoryContainer.offsetLeft;
    const walk = (x - moveInX) * 2;
    categoryContainer.scrollLeft = scrollLeft - walk;
    element.preventDefault();
});
categoryContainer.addEventListener("mouseup", () => {
    isDragging = false;
    categoryContainer.classList.remove("dragging");
});
categoryContainer.addEventListener('mouseleave', () => {
    isDragging = false;

});
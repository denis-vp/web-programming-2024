let accordionHeader = document.getElementsByClassName("accordion-header");

for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
        let accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
}

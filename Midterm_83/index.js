fetch('./data.json')
.then(function(response) {
    return response.json();
})
.then(function (foods) {
    let placeholder = document.querySelector("#data-output");
    var isActive = false;
    let out = "";

    for (let food of foods) {
        if (!isActive) {
            out += `
            <li class="slide" data-active>
                  <h2>${food.foodItem}</h2>
                  <img src="${food.foodImage}" alt="">
                </li>
                `;
            isActive = true;
            continue;
        }
        out += `
        <li class="slide">
              <h2>${food.foodItem}</h2>
              <img src="${food.foodImage}" alt="">
            </li>
            `;
    }

    placeholder.innerHTML = out;
})






const buttons = document.querySelectorAll("[data-slideshow-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const offset = button.dataset.slideshowButton === "next" ? 1 : -1;
        const slides = button.closest("[data-slideshow]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        }

        if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});


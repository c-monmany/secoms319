/*Menu*/
fetch('./data.json')
.then(function(response)
{
    return response.json();
})
.then(function (foods)
{
    let placeholder = document.querySelector("#menu");
    let out = "";
    for (let food of foods) {

        
        out += `
              <div class="col">
              <div class="card shadow-sm">
                <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                <h2>${food.foodItem}</h2>
                <img src="${food.foodImage}" alt="">
                <div class="card-body">
                  <p class="card-text"><strong>${food.foodItem}</strong> ${food.description}</p>
                  <p style="color: red">${food.price}</p>
                  <br>
                </br>
                </div>
              </div>
            </div>

            `
    }

    placeholder.innerHTML = out;
    })
// sk_test_51N4wAmAmaH3QkiBu035T5gKETs47NnI92fKzvfC398rllBOhJKeMF5ler6ZjLint5UX7qPQDaf7jU1MG8z0Bncpu00fxGYtjxD
// paneer butter masala  price_1N4wIbAmaH3QkiBuX7y9OPsn
// palak paneer  price_1N4wK2AmaH3QkiBubJXOV6sd
// chilly paneer  price_1N4wLvAmaH3QkiBuf9Ozocbn
// podi dosa  price_1N4wNJAmaH3QkiBuxvu3u6yc
// cheese dosa  price_1N4wO5AmaH3QkiBuUs3khAzA
// schezwan fried rice  price_1N4wPGAmaH3QkiBuCf6wu2yG
// egg schezwan fried rice  price_1N4wQPAmaH3QkiBuE5bLrXWA
// triple schezwan  price_1N4wRuAmaH3QkiBuD5A4yiRi
// naan  price_1N4wSnAmaH3QkiBuoec7Mtsx

const productsArray = [
    
]
fetch("http://localhost:4000/")
            .then((response) => response.json())
            .then((data) => {
                console.log("Show Catalog of Products :");
                productsArray.push(data);
                
            });


function getProductData(id) {
    let productData = productsArray.find(product => product._id === id)

    if(productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}
export { productsArray, getProductData };
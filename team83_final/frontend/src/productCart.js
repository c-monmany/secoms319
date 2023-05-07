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
    {
        id: "price_1N4wIbAmaH3QkiBuX7y9OPsn",
        title: "Paneer Butter Masala",
        price: 14.99
    },
    {
        id: "price_1N4wK2AmaH3QkiBubJXOV6sd",
        title: "Palak Paneer",
        price: 14.99
    },
    {
        id: "price_1N4wLvAmaH3QkiBuf9Ozocbn",
        title: "Chilly Paneer",
        price: 11.99
    },
    {
        id: "price_1N4wNJAmaH3QkiBuxvu3u6yc",
        title: "Podi Dosa",
        price: 14.99
    },
    {
        id: "price_1N4wO5AmaH3QkiBuUs3khAzA",
        title: "Cheese Dosa",
        price: 14.99
    },
    {
        id: "price_1N4wPGAmaH3QkiBuCf6wu2yG",
        title: "Schezwan Fried Rice",
        price: 12.99
    },
    {
        id: "price_1N4wQPAmaH3QkiBuE5bLrXWA",
        title: "Egg Schezwan Fried Rice",
        price: 14.99
    },
    {
        id: "price_1N4wRuAmaH3QkiBuD5A4yiRi",
        title: "Triple Schezwan",
        price: 19.99
    },
    {
        id: "price_1N4wSnAmaH3QkiBuoec7Mtsx",
        title: "Naan",
        price: 2.00
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}
export { productsArray, getProductData };
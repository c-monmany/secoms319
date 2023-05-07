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

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51N4wAmAmaH3QkiBu035T5gKETs47NnI92fKzvfC398rllBOhJKeMF5ler6ZjLint5UX7qPQDaf7jU1MG8z0Bncpu00fxGYtjxD');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
const products = [
    {
        "id": 1,
        "title": "Drop + MiTo GMK Laser Custom Set",
        "price": 140,
        "category": "Keycap Sets",
        "image": "/images/laser_custom.jpg",
    },
    {
        "id": 2,
        "title": "Drop DSA Astrolokeys",
        "price": 65,
        "category": "Keycap Sets",
        "image": "/images/Astrolokeys.jpg"
    },
    {
        "id": 3,
        "title": "GKS XDA V2 Happy Planet",
        "price": 36,
        "category": "Keycap Sets",
        "image": "/images/Happy_Planet.jpg"
    },
    {
        "id": 4,
        "title": "Drop + Redsuns GMK Red Samurai",
        "price": 150,
        "category": "Keycap Sets",
        "image": "/images/Redsuns.jpg"
    },
    {
        "id": 5,
        "title": "DROP + NEPHLOCK GMK KAIJU",
        "price": 150,
        "category": "Keycap Sets",
        "image": "/images/nephlock.jpg"
    },
    {
        "id": 6,
        "title": "DROP MT3 JUKEBOX",
        "price": 120,
        "category": "Keycap Sets",
        "image": "/images/Jukebox.jpg"
    },
    {
        "id": 7,
        "title": "BMO Artisan Custom Keycap By AstroKeycaps",
        "description": "Handmade, made with Resin for Cherry MX Switches",
        "price": 34.99,
        "category": "Artisan Caps",
        "image": "/images/BMO.jpg"
    },
    {
        "id": 8,
        "title": "Duckey Duck Artisan Keycap by PoppaCap",
        "description": "Handmade, made with Resin for Cherry MX Switches",
        "price": 29.08,
        "category": "Artisan Caps",
        "image": "/images/Duckey Duck.jpg"
    },
    {
        "id": 9,
        "title": "Breakfast Toast Bread Artisan Keycap by TechnoGiftStore",
        "description": "Handmade, made with Resin for Cherry MX Switches",
        "price": 39.99,
        "category": "Artisan Caps",
        "image": "/images/Toast.jpg"
    },
    {
        "id": 10,
        "title": "Steamed Dumpling Keycap by LittleCuiteDesign",
        "description": "Handmade, 3D printed and made with Acrylic Paint, For Cherry MX Switches",
        "price": 25.90,
        "category": "Artisan Caps",
        "image": "/images/Dumpling.jpg"
    },
    {
        "id": 11,
        "title": "NES Artisian Keycap by MMiKeycaps",
        "description": "Handmade, Made with Epoxy Made with Epoxy Resin and Acrylic Paint, For Cherry MX Switches",
        "price": 54.87,
        "category": "Artisan Caps",
        "image": "/images/NES.jpg"
    },
    {
        "id": 12,
        "title": "Floppy Disk Artisan Keycap by PoppaCap",
        "description": "Handmade, made with Resin for Cherry MX Switches",
        "price": 29.08,
        "category": "Artisan Caps",
        "image": "/images/Floppy Disk.jpg"
    }


]

function getProductData(id) {

    let productData = products.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist");
    }

    return productData;
}

export { products, getProductData}
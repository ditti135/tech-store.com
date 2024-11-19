$(document).ready(function () {
    const products = [
        {
            id: 1,
            name: "PlayStation 5",
            price: "$499",
            image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/The-PlayStation-5-can-be-placed-either-vertically-or-horizontally.jpg",
            description: "The latest PlayStation with 4K gaming capabilities."
        },
        {
            id: 2,
            name: "Xbox Series X",
            price: "$499",
            image: "https://www.androidauthority.com/wp-content/uploads/2020/11/xbox-series-x-review-side-scaled.jpeg",
            description: "Xbox's most powerful console with fast load times."
        },
        {
            id: 3,
            name: "Gaming Laptop",
            price: "$1,499",
            image: "https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg",
            description: "High-performance laptop for both gaming and work."
        },
        {
            id: 4,
            name: "RGB Keyboard",
            price: "$120",
            image: "https://redragonzone.pk/cdn/shop/products/PSNoTxfg6QeECNxxE6gi6FWfcTCADo6GNi8O97V6_2048x.png?v=1627735652",
            description: "Customizable RGB mechanical keyboard for gamers."
        },
        {
            id: 4,
            name: "Gaming Pc",
            price: "$1200",
            image: "https://www.digitaltrends.com/wp-content/uploads/2023/07/clx-hathor-review-11.jpg?fit=720%2C480&p=1",
            description: "Customizable RGB mechanical keyboard for gamers."
        },
        {
            id: 4,
            name: "Mouse Logitech Superlight",
            price: "$110",
            image: "https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_UF894,1000_QL80_.jpg",
            description: "Customizable RGB mechanical keyboard for gamers."
        },
        {
            id: 4,
            name: "MousePad",
            price: "$35",
            image: "https://m.media-amazon.com/images/I/71p5wHxgKxL._AC_UF894,1000_QL80_.jpg",
            description: "Customizable RGB mechanical keyboard for gamers."
        },
        {
            id: 4,
            name: "Headphones HyperX Cloud 3",
            price: "$230",
            image: "https://i.rtings.com/assets/products/e9AT40HJ/hyperx-cloud-iii/design-medium.jpg?format=auto",
            description: "Customizable RGB mechanical keyboard for gamers."
        },
        {
            id: 4,
            name: "Monitor Alienware 500Hz",
            price: "$600",
            image: "https://external-preview.redd.it/igs3jUY5xwPO-Lg4ByM7N_bBEUSF-Kv8zeEYsin8g9I.jpg?width=1080&crop=smart&auto=webp&s=e7e48b56b7f59022e59feb774db4215adc6d3d6a",
            description: "Customizable RGB mechanical keyboard for gamers."
        }
    ];

    // Rendering the products
    products.forEach(product => {
        $('#product-list').append(`
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="text-muted">${product.price}</p>
                    </div>
                </div>
            </div>
        `);
    });

    // Handling contact form submission
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        alert('Thank you for reaching out to us. We will respond soon!');
        $('#contactForm')[0].reset();
    });
});

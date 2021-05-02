const products = document.querySelector(".products");
const url = "https://didrikhansen.pro/projectsx/flower-power/wp-json/wc/store/products";

async function productBox() {
    try {
        const res = await fetch(url);
        const json = await res.json();

        const loader = document.querySelector(".loader");
        console.log(json);

        products.innerHTML = "";

        loader.classList.remove(".loader");

        json.forEach(function (json) {
            const productName = `${json.name}`;
            const productId = `${json.id}`;
            const productImg = `${json.images[0].thumbnail}`;
            const price = `${json.prices.price}`;

            products.innerHTML += `
            <li class="productBox">
                <ul>
                    <li><img src="${productImg}"</li>
                    <li class="productName">${productName}</li>
                    <li class="productPrice">£ ${price}.00</li>
                    <a href="product.html?id=${productId}" class="button">View more</a>
                </ul>
            </li>`
        });

        price.sort((a, b) => {
            return b.price > a.price;
        })

    } catch(err) {
        console.log("Error occurred", err);
    }
}
productBox();
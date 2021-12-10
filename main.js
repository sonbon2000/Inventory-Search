let listproducts = [];
const inputField = document.querySelector('#filter');
const productsList = document.querySelector('.products');

async function getProductData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    productsList.innerHTML = '';
    products.forEach(prod => {
        const div = document.createElement('div');
        div.classList.add('product');
        listproducts.push(div);

        div.innerHTML = `
            <img src = "${prod.image}" alt = "">
            <div class = "product-detail">
                <h4>${prod.title.slice(0,30)}</h4>
                <p>$${prod.price}</p>
            </div>
        `

        productsList.appendChild(div)
    })
}
getProductData()

inputField.addEventListener('input', e => onSearchItems(e.target.value));

function onSearchItems(search) {
    listproducts.forEach(item => {
        if(item.textContent.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

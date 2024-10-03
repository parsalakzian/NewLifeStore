// فایل products.json را بارگذاری می‌کند و محصولات را در صفحه نمایش می‌دهد
fetch('../../../products.json')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById('product-list');
        const products = data.products;

        for (const key in products) {
            if (products.hasOwnProperty(key)) {
                const product = products[key].fa;

                // ایجاد کارت محصول
                const productCard = document.createElement('a');
                productCard.classList.add('product-card');
                // productCard.onclick = function() { window.open("/product?id="+key, "_self"); };
                productCard.href = "/fa/product?id="+key;

                // اضافه کردن تصویر محصول
                const productImage = document.createElement('img');
                productImage.src = product.images[0];
                productCard.appendChild(productImage);

                // اضافه کردن نام محصول
                const productName = document.createElement('h3');
                productName.textContent = product.name;
                productCard.appendChild(productName);

                // اضافه کردن توضیحات محصول
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description.substring(0, 100) + '...';
                productCard.appendChild(productDescription);

                // اضافه کردن قیمت محصول
                const productPrice = document.createElement('div');
                productPrice.classList.add('price');
                productPrice.textContent = product.price + ' تومان';
                productCard.appendChild(productPrice);

                // اضافه کردن موجودی محصول
                const productStock = document.createElement('div');
                productStock.classList.add('stock');
                productStock.textContent = `موجودی: ${product.stock} عدد`;
                productCard.appendChild(productStock);
                
                

                // اضافه کردن کارت محصول به صفحه
                productContainer.appendChild(productCard);
            }
        }
    })
    .catch(error => console.error('Error fetching products:', error));


    

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.querySelector('ul').classList.toggle('active');
});
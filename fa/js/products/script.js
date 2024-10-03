// بارگذاری اطلاعات محصول از فایل products.json
fetch('../../../products.json')
.then(response => response.json())
.then(data => {
    const products = data.products;

    // دریافت آی‌دی محصول از query string
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // آی‌دی محصول

    const product = products[productId].fa;
    document.title = product.name
    // نمایش اطلاعات محصول
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = product.price + ' تومان';
    document.getElementById('product-stock').textContent = `موجودی: ${product.stock} عدد`;

    // اضافه کردن مشخصات فنی
    const specsList = document.getElementById('product-specs');
    for (const spec in product.spec) {
        const specItem = document.createElement('li');
        
        // اگر مشخصه پورت‌ها باشد، به صورت جداگانه پردازش می‌کنیم
        if (spec === 'Ports') {
            const ports = product.spec[spec];
            specItem.classList.add('spec-item');
            
            // ساختن نام مشخصه
            const specName = document.createElement('span');
            specName.classList.add('spec-name');
            specName.textContent = spec; // نام "Ports"
    
            // ساختن بخش توضیحات برای هر پورت
            const specValue = document.createElement('span');
            specValue.classList.add('spec-value');
    
            // پردازش هر پورت و مقدار آن
            for (const port in ports) {
                const portInfo = document.createElement('div');
                portInfo.textContent = `${port}: ${ports[port]}`;
                specValue.appendChild(portInfo);
            }
    
            specItem.appendChild(specName);
            specItem.appendChild(specValue);
        } else {
            // ساختن بخش‌های نام و توضیحات برای سایر مشخصات
            const specName = document.createElement('span');
            specName.classList.add('spec-name');
            specName.textContent = spec;
    
            const specValue = document.createElement('span');
            specValue.classList.add('spec-value');
            specValue.textContent = product.spec[spec];
    
            specItem.appendChild(specName);
            specItem.appendChild(specValue);
        }
    
        // اضافه کردن آیتم به لیست مشخصات
        specsList.appendChild(specItem);
    }

    // نمایش تصاویر
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.getElementById('thumbnails');
    mainImage.src = product.images[0]; // تصویر اصلی

    product.images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imgSrc;
        thumbnails.appendChild(thumbnail);

        // تغییر تصویر اصلی با کلیک روی تصاویر کوچک
        thumbnail.addEventListener('click', () => {
            mainImage.src = imgSrc;
        });
    });

    // مدیریت دکمه ثبت سفارش
    const orderBtn = document.querySelector('.order-btn');
    orderBtn.addEventListener('click', () => {
        window.open("tel:+989054847599");
    });
})
.catch(error => console.error('Error loading product:', error));



const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.querySelector('ul').classList.toggle('active');
});
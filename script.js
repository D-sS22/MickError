// Массивы данных для "Секонд-хенд"
const secondhandItems = ["Футболка", "Куртка", "Штаны", "Кепка", "Часы", "Сумка", "Кроссовки", "Тапочки"];

// Функция для генерации товара для секонд-хенда
function generateSecondhandProduct() {
    const name = secondhandItems[Math.floor(Math.random() * secondhandItems.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];

    // 80% товаров "Обычные", 20% — более дорогие
    const isRare = Math.random() > 0.8;
    const basePrice = isRare ? Math.floor(Math.random() * 4000) + 2000 : Math.floor(Math.random() * 1000) + 300;
    const price = Math.floor(basePrice * 0.7); // Скидка 30%

    return `
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="${name}">
            <h3>${name}</h3>
            <p>Бренд: ${brand}</p>
            <p>Цена: ${price} грн</p>
        </div>
    `;
}

// Логика для генерации товаров в зависимости от категории
if (selectedCategory && categories[selectedCategory]) {
    for (let i = 0; i < 20; i++) {
        productsContainer.innerHTML += generateProduct(selectedCategory);
    }
} else if (selectedCategory === "secondhand") {
    categoryTitle.textContent = "Категория: Секонд-хенд";
    for (let i = 0; i < 20; i++) {
        productsContainer.innerHTML += generateSecondhandProduct();
    }
}

// Бесконечная прокрутка (ленивая загрузка)
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (selectedCategory && categories[selectedCategory]) {
            for (let i = 0; i < 10; i++) {
                productsContainer.innerHTML += generateProduct(selectedCategory);
            }
        } else if (selectedCategory === "secondhand") {
            for (let i = 0; i < 10; i++) {
                productsContainer.innerHTML += generateSecondhandProduct();
            }
        }
    }
});

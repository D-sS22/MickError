// Массивы данных для генерации
const categories = {
    clothes: ["Футболка", "Куртка", "Штаны", "Кепка"],
    accessories: ["Часы", "Очки", "Сумка", "Кошелёк"],
    sneakers: ["Кроссовки", "Ботинки", "Сандалии", "Тапочки"]
};

const brands = ["Nike", "Adidas", "Puma", "Gucci", "Chanel"];
const qualities = ["Обычное", "Хорошее", "Элитное"];

// Получаем категорию из URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");
const categoryTitle = document.getElementById("category-title");
const productsContainer = document.getElementById("products");

// Устанавливаем заголовок категории
if (selectedCategory && categories[selectedCategory]) {
    categoryTitle.textContent = `Категория: ${selectedCategory}`;
} else {
    categoryTitle.textContent = "Категория не найдена!";
}

// Функция для генерации случайного товара
function generateProduct(category) {
    const name = categories[category][Math.floor(Math.random() * categories[category].length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const quality = qualities[Math.floor(Math.random() * qualities.length)];
    const price = Math.floor(Math.random() * 10000) + 500;

    return `
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="${name}">
            <h3>${name}</h3>
            <p>Бренд: ${brand}</p>
            <p>Качество: ${quality}</p>
            <p>Цена: ${price} грн</p>
        </div>
    `;
}

// Генерация товаров для выбранной категории
if (selectedCategory && categories[selectedCategory]) {
    for (let i = 0; i < 20; i++) {
        productsContainer.innerHTML += generateProduct(selectedCategory);
    }
}

// Бесконечная прокрутка (ленивая загрузка)
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        for (let i = 0; i < 10; i++) {
            productsContainer.innerHTML += generateProduct(selectedCategory);
        }
    }
});

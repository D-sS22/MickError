const itemsContainer = document.getElementById("items-container");
const categoryTitle = document.getElementById("category-title");

// Данные категорий
const categories = {
    clothes: "Одежда",
    accessories: "Аксессуары",
    sneakers: "Кроссовки",
    secondhand: "Секонд-хенд",
};

// Получение категории из URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category") || "clothes";
categoryTitle.textContent = categories[category] || "Категория";

// Функция для генерации случайных товаров
function generateRandomItems(count, isSecondHand = false) {
    const items = [];
    const brands = ["Nike", "Adidas", "Puma", "Gucci", "Prada"];
    const qualities = ["Обычное", "Редкое", "Эпическое", "Легендарное"];

    for (let i = 0; i < count; i++) {
        const item = {
            name: `Товар ${i + 1}`,
            brand: brands[Math.floor(Math.random() * brands.length)],
            price: Math.floor(Math.random() * 5000) + 500,
            quality: isSecondHand
                ? (Math.random() > 0.8 ? qualities[Math.floor(Math.random() * qualities.length)] : "Обычное")
                : qualities[Math.floor(Math.random() * qualities.length)],
        };

        // Уменьшение цены на 30% для секонд-хенда
        if (isSecondHand) {
            item.price = Math.floor(item.price * 0.7);
        }

        items.push(item);
    }

    return items;
}

// Отображение товаров
function displayItems(items) {
    itemsContainer.innerHTML = "";
    items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <h3>${item

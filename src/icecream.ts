// Функція для підрахунку вартості морозива
function calculateIceCreamCost(): void {
    // Вибір розміру морозива
    let size = prompt("Оберіть розмір стаканчика: 'маленький' (10 грн) або 'великий' (25 грн)");

    let basePrice: number;
    if (size === "великий") {
        basePrice = 25;
    } else if (size === "маленький") {
        basePrice = 10;
    } else {
        alert("Невірний розмір стаканчика!");
        return;
    }

    // Вибір начинки
    let toppings = prompt("Оберіть начинку: 'шоколад' (+5 грн), 'карамель' (+6 грн), 'ягоди' (+10 грн). Можна вибрати кілька, розділяючи коми.");

    if (!toppings) {
        alert("Необхідно вибрати хоча б одну начинку!");
        return;
    }

    let toppingsArray = toppings.split(",");
    let toppingsPrice = 0;

    toppingsArray.forEach((topping) => {
        topping = topping.trim().toLowerCase();
        if (topping === "шоколад") {
            toppingsPrice += 5;
        } else if (topping === "карамель") {
            toppingsPrice += 6;
        } else if (topping === "ягоди") {
            toppingsPrice += 10;
        } else {
            alert(`Начинка "${topping}" не розпізнана, вона буде пропущена.`);
        }
    });

    // Додатковий маршмелоу
    let marshmallow = prompt("Чи бажаєте додати маршмелоу? 'так' (+5 грн) або 'ні'");
    let marshmallowPrice = marshmallow?.toLowerCase() === "так" ? 5 : 0;

    // Загальна вартість
    let totalPrice = basePrice + toppingsPrice + marshmallowPrice;
    alert(`Загальна вартість вашого морозива: ${totalPrice} грн.`);
}

// Виклик функції
calculateIceCreamCost();

// Функція для підрахунку вартості морозива
function calculateIceCreamCost() {
    // Вибір розміру морозива
    var size = prompt("Оберіть розмір стаканчика: 'маленький' (10 грн) або 'великий' (25 грн)");
    var basePrice;
    if (size === "великий") {
        basePrice = 25;
    }
    else if (size === "маленький") {
        basePrice = 10;
    }
    else {
        alert("Невірний розмір стаканчика!");
        return;
    }
    // Вибір начинки
    var toppings = prompt("Оберіть начинку: 'шоколад' (+5 грн), 'карамель' (+6 грн), 'ягоди' (+10 грн). Можна вибрати кілька, розділяючи коми.");
    if (!toppings) {
        alert("Необхідно вибрати хоча б одну начинку!");
        return;
    }
    var toppingsArray = toppings.split(",");
    var toppingsPrice = 0;
    toppingsArray.forEach(function (topping) {
        topping = topping.trim().toLowerCase();
        if (topping === "шоколад") {
            toppingsPrice += 5;
        }
        else if (topping === "карамель") {
            toppingsPrice += 6;
        }
        else if (topping === "ягоди") {
            toppingsPrice += 10;
        }
        else {
            alert("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping, "\" \u043D\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0430, \u0432\u043E\u043D\u0430 \u0431\u0443\u0434\u0435 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u0430."));
        }
    });
    // Додатковий маршмелоу
    var marshmallow = prompt("Чи бажаєте додати маршмелоу? 'так' (+5 грн) або 'ні'");
    var marshmallowPrice = (marshmallow === null || marshmallow === void 0 ? void 0 : marshmallow.toLowerCase()) === "так" ? 5 : 0;
    // Загальна вартість
    var totalPrice = basePrice + toppingsPrice + marshmallowPrice;
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalPrice, " \u0433\u0440\u043D."));
}
// Виклик функції
calculateIceCreamCost();

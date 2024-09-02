// Функція з параметром за замовчуванням
function greet(name, age) {
    if (age === void 0) { age = 30; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
// Виклик функції з переданим числом
greet("Alice", 25);
// Виклик функції без переданого числа (буде використане значення за замовчуванням)
greet("Bob");

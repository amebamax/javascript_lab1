// Функція з параметром за замовчуванням
function greet(name: string, age: number = 30): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Виклик функції з переданим числом
greet("Alice", 25);

// Виклик функції без переданого числа (буде використане значення за замовчуванням)
greet("Bob");



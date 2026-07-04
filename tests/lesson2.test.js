const { task1Answer, task2, task3Answer, divide, task5 } = require('../solution/solution');

describe('Урок 2 - Умови, цикли, функції, масиви', () => {

  test('Задача 1: ++someVar та if(someVar)', () => {
    expect(task1Answer).not.toBeNull();
    expect(task1Answer).toBe(1);
  });

  test('Задача 2: цикл FOR - 10 рядків "Пункт №N"', () => {
    const result = task2();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(10);
    result.forEach((item, i) => {
      expect(item).toBe(`Пункт №${i + 1}`);
    });
  });

  test('Задача 3: складна логічна умова', () => {
    expect(String(task3Answer)).not.toBe('000');
    expect(task3Answer).toBeNull();
  });

  test('Задача 4: divide - базовий поділ', () => {
    const result = divide(10, 2);
    expect(result).toBe('Результат ділення: 5');
  });

  test('Задача 4: divide - ділення на 0 не повертає Infinity', () => {
    const result = divide(10, 0);
    expect(result).not.toContain('Infinity');
    expect(result).not.toContain('NaN');
  });

  test('Задача 4: divide - без аргументів не повертає NaN і не кидає помилку', () => {
    expect(() => divide()).not.toThrow();
    const result = divide();
    expect(result).not.toContain('NaN');
  });

  test('Задача 4: divide - некоректний перший аргумент', () => {
		expect(divide("10", 2)).toContain('Некоректні');
	});

	test('Задача 4: divide - некоректний другий аргумент', () => {
		expect(divide(10, "2")).toContain('Некоректні');
	});

	test('Задача 4: divide - NaN не допускається', () => {
		const result = divide(NaN, 2);
		expect(result).not.toContain('NaN');
	});

	test('Задача 4: divide - Infinity не допускається', () => {
		const result = divide(Infinity, 2);
		expect(result).not.toContain('Infinity');
	});

	test('Задача 4: divide - рядок замість числа', () => {
		expect(divide("10", 2)).toBe('Некоректні дані');
	});

  test('Задача 5: масив містить 10 і функція повертає true', () => {
    expect(task5()).toBe(true);
  });

});

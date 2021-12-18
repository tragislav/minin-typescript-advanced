// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

// const promise: Promise<number> = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 2000);
// });

// promise.then((data) => {
//     console.log(data.toFixed());
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'tomas' }, { age: 26 });
const merged2 = mergeObjects({ modal: 'ford' }, { year: 2010 });

// const merged3 = mergeObjects({a: 'aaa'}, 'bbb');

// console.log(merged3);
// console.log(merged);

// ======================================================================================================

interface ILength {
    length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`,
    };
}

console.log(withCount('Привет typescript'));
console.log(withCount(['i', 'am', 'array']));
// console.log(withCount(20)); ТАК НЕЛЬЗЯ
console.log(withCount({ length: 20 }));

// ======================================================================================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}
const person = {
    name: 'tomas',
    age: 26,
};

console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job')); ТАК НЕЛЬЗЯ

// ======================================================================================================
class Collection<T extends string | number | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter((i) => i !== item);
    }

    get items(): T[] {
        return this._items;
    }
}

const strings = new Collection<string>(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);

const numbers = new Collection<number>([1, 1, 2, 3, 5]);
numbers.add(8);
numbers.remove(1);
console.log(numbers.items);

// const objects = new Collection([{ a: 1 }, { b: 2 }]);
// objects.remove({ b: 2 });
// console.log(objects.items);

// ======================================================================================================
interface Car {
    model: string;
    year: number;
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {};

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as Car;
}

const cars: Readonly<Array<string>> = ['ford', 'audi'];
// cars.shift()
// cars.[1]

const ford: Readonly<Car> = {
    model: 'ford',
    year: 2020,
};

// ford.model = 'ferari'

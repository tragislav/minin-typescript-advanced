"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'tomas' }, { age: 26 });
const merged2 = mergeObjects({ modal: 'ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`,
    };
}
console.log(withCount('Привет typescript'));
console.log(withCount(['i', 'am', 'array']));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'tomas',
    age: 26,
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 1, 2, 3, 5]);
numbers.add(8);
numbers.remove(1);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['ford', 'audi'];
const ford = {
    model: 'ford',
    year: 2020,
};
//# sourceMappingURL=generic.js.map
import Dep from './dep.js';

export default class Observer {
    constructor (value) {
        this.value = value;
        if (!Array.isArray(value)) {
            this.walk(value);
        }
    }

    walk (obj) {
        const keys = Object.keys(obj);
        keys.forEach(key => {
            defineReactive(obj, key, obj[key]);
        })
    }
}

function defineReactive (obj, key, value) {
    // + 递归子属性
    if (typeof value === 'object') {
        new Observer(value);
    }
    // let dep = []; // -
    let dep = new Dep(); // +
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            console.log(`get ${value}`);
            dep.depend();
            return value;
        },
        set (newVal) {
            if (newVal === value) {
                return;
            }
            value = newVal;
            dep.notify();
            console.log(`set ${newVal}`);
        }
    })
}
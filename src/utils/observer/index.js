import Dep from './dep.js';

function defineReactive (obj, key, value) {
    // let dep = []; // -
    let dep = new Dep(); // +
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            dep.push(window.target);
            return value;
        },
        set (newVal) {
            if (newVal === value) {
                return;
            }
            dep.forEach(watcher => {
                watcher(newVal, value);
            })
            value = newVal;
        }
    })
}
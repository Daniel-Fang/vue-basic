import Dep from './dep';
import { arrayMethods, protoAugment, copyAugment } from './array';

const hasProto = '__proto__' in {};
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

export default class Observer {
    constructor (value) {
        this.value = value;
        if (Array.isArray(value)) {
            // 拦截操作只针对被侦测了变化的数据 
            // ES6 支持 setPrototypeOf 和 getPrototypeOf
            // value.__proto__ = arrayMethods;  // - 原因：__proto__ 并非所有浏览器都支持 
            // +
            const augment = hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
        } else {
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
            dep.depend();
            return value;
        },
        set (newVal) {
            if (newVal === value) {
                return;
            }
            value = newVal;
            dep.notify();
        }
    })
}
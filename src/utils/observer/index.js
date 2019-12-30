import Dep from './dep';
import { arrayMethods, protoAugment, copyAugment } from './array';

const hasProto = '__proto__' in {};
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

export default class Observer {
    constructor (value) {
        this.value = value;
        this.dep = new Dep();
        Object.defineProperty(value, '__ob__', this); // + 
        if (Array.isArray(value)) {
            // 拦截操作只针对被侦测了变化的数据 
            // ES6 支持 setPrototypeOf 和 getPrototypeOf
            // value.__proto__ = arrayMethods;  // - 原因：__proto__ 并非所有浏览器都支持 
            // +
            this.observeArray(value);
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

    observeArray (value) {
        value.forEach(item => observe(item));
    }
}

function defineReactive (obj, key, value) {
    // + 递归子属性
    if (typeof value === 'object') {
        new Observer(value);
    }
    // let dep = []; // -
    let childOb = observe(value);
    let dep = new Dep(); // +
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            dep.depend();
            if (childOb) {
                childOb.dep.depend();
            }
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

/**
 * 尝试为 value 创建一个 Observer 实例
 * @param {*} value 
 * return 一个 Observer 实例
 */
function observe (value) {
    if (typeof value !== 'object') {
        return;
    }
    let ob;
    if (Object.prototype.hasOwnProperty.call(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
}
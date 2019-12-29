export default class Dep {
    constructor () {
        this.subs = []; // subs 存储的是订阅者 即 Watcher
    }

    addSub (sub) {
        this.subs.push(sub);
    }

    removeSub (sub) {
        let index = this.subs.indexOf(sub);
        if (index > -1) {
            return this.subs.splice(index, 1);
        }
    }

    depend () {
        if (window.target) {
            this.addSub(window.target);
        }
    }

    notify () {
        const subs = this.subs.slice();
        subs.forEach(sub => sub.update());
    }
}
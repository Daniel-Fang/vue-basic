class EventBus {
    constructor (vue) {
        if (!this.handles) {
            Object.defineProperty(this, 'handles', {
                value: {},
                enumerable: false
            })
        }

        this.Vue = vue;
        this.eventMapUid = {};
    }

    $on (eventName, callback, vm) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(callback);
        if (vm instanceof this.Vue) this.setEventMapUid(this._uid, eventName);
    }

    $emit (eventName, ...args) {
        this.handles[eventName].forEach(callback => callback(...args));
    }

    $off (uid) {
        let currentEvents = this.eventMapUid[uid] || [];
        currentEvents.forEach(eventName => (delete this.handles[eventName]));
    }

    $once (eventName, callback, vm) {
        
    }

    setEventMapUid (uid, eventName) {
        if (!this.eventMapUid[uid]) {
            this.eventMapUid[uid] = [];
        }
        this.eventMapUid[uid].push(eventName);
    }
}

let $EventBus = {};
$EventBus.install = function (Vue, options) {
    Vue.prototype.$eventBus = new EventBus(Vue);
    Vue.mixin({
        beforeDestroy () {
            this.$eventBus.$off(this._uid);
        }
    });
}

export default $EventBus;
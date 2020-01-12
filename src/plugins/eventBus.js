class EventBus {
    constructor (vue) {
        if (!this.handles) {
            Object.defineProperty(this, 'handles', {
                value: {},
                enumerable: false
            })
        }
        this.Vue = vue;
        this.eventMapUid = {}; // _uid 和 eventName 的映射  _uid: [eventName1, eventName2, eventName3, ...]
    }

    setEventMapUid (uid, eventName) {
        (this.eventMapUid[uid] || (this.eventMapUid[uid] = [])).push(eventName);
    }

    /**
     * 
     * @param {string | Array<string>} eventName 
     * @param {Function} callback 
     * @param {Vue instance} vm 
     */
    $on (eventName, callback, vm) {
        if (Array.isArray(eventName)) {
            eventName.forEach(event => {
                this.$on(event, callback, vm);
            })
        } else {
            (this.handles[eventName] || (this.handles[eventName] = [])).push(callback);
            if (vm instanceof this.Vue) this.setEventMapUid(vm._uid, eventName);
        }
    }

    /**
     * 
     * @param {string} eventName 
     * @param  {...any} args 
     */
    $emit (eventName, ...args) {
        (this.handles[eventName] || []).forEach(callback => callback(...args));
    }

    /**
     * 
     * @param {组件的唯一标示} uid 
     */
    $off (uid) {
        let currentEvents = this.eventMapUid[uid] || [];
        currentEvents.forEach(eventName => (delete this.handles[eventName]));
    }

    $once (eventName, callback, vm) {
        let that = this;
        function on () {
            delete that.handles[eventName];
            callback.apply(vm, arguments);
        }

        on.callback = callback;
        this.$on(eventName, on, vm);
    }
}

let $EventBus = {};
$EventBus.install = function (Vue, options) {
    Vue.prototype.$eventBus = new EventBus(Vue);
    Vue.mixin({
        beforeDestroy () {
            this.$eventBus.$off(this._uid);
            console.log('组件销毁了');
        }
    });
}

export default $EventBus;
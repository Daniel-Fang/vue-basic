/**
 * {string | Function} expOrFn
 * {Function | Object} callback
 * {Object} [options]
 * - {boolean} deep
 * - {boolean} immediate
 */
const unwatch = vm.$watch(expOrFn, callback, [options]);
unwatch();


import Vue from 'vue';
Vue.prototype.$watch = function (expOrFn, callback, options) {
    const vm = this;
    options = options || {};
    const watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
        cb.call(vm, watcher.value); // 将当前值传入，触发回调
    }
    return function unwatch () {
        watcher.teardown();
    }
}
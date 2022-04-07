/*
 * @Autor: guoyux.wang
 * @Date: 2021-08-01 17:27:16
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-03 01:36:11
 * @Description: observer.js
 */

class Observer {
    constructor(data) {
        this.observe(data);
    }

    observe(data){
        // 将数据data原有的属性改成set和get方式
        if (!data || typeof data !== 'object') {
            return;
        }
        // 将数据一一劫持 先获取data的key和value
        Object.keys(data).forEach(key => {
            // 劫持
            this.defineReactive(data, key, data[key]);
            this.observe(data[key]); // 深度劫持
        })

    }
    
    // 定义响应式
    defineReactive(obj, key, value) {
        let that = this;
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                console.log(Dep.target);
                return value;
            },
            set(newValue) {
                if (newValue != value) {
                    // 这里this不是指向Observer
                    that.observe(newValue);
                    value = newValue;
                    dep.notify();
                }
            }
        })
    }
}


class Dep {
    constructor() {
        this.subs = []
    }

    addSub(watcher) {
        this.subs.push(watcher);
    }

    notify() {
        this.subs.forEach(watcher => watcher.update())
    }
}
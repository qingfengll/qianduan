/*
 * @Autor: guoyux.wang
 * @Date: 2021-08-01 17:39:31
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-01 21:40:00
 * @Description: 
 */

// 给需要变化的哪个元素增加一个观察者，当数据变化后执行对应的方法
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 现获取一下老的值
        this.value = this.get();
    }
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data)
    }
    get() {
        Dep.target = this;
        let value = this.getVal(this.vm, this.expr);
        Dep.target = null;
        return value;
    }
    // 对外暴露的方法
    update() {
        let newValue = this.getVal(this.vm, this.expr);
        let oldValue = this.value;
        if (newValue != oldValue) {
            this.cb(newValue); // 对应watcher的callback
        }
    }
}
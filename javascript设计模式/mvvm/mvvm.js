/*
 * @Autor: guoyux.wang
 * @Date: 2021-08-01 16:32:43
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-01 18:20:48
 * @Description: MVVM
 */

class MVVM {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;

        if (this.$el) {
            // 数据劫持 把属性改成get和set方法
            new Observer(this.$data);
            this.proxyData(this.$data);
            // 用数据和元素进行编译
            new Compile(this.$el, this);
        }
    }

    proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newValue) {
                    data[key] = newValue;
                }
            })
        })
    }
}
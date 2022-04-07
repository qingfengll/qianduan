/*
 * @Autor: guoyux.wang
 * @Date: 2021-08-01 16:32:25
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-01 19:04:52
 * @Description: 编译模版
 */

class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;

        if (this.el) {
            // 1. 先把真实DOM移入到内存中 fragment
            let fragment = this.node2fragment(this.el);
            // 2.编译 提取想要的元素节点 v-model 和文本节点 {{}}
            this.compile(fragment);
            // 3.把编译好的fragment再塞回到页面
            this.el.appendChild(fragment);
        }
    }


    /**
     * 辅助方法
     */

    isElementNode(node) {
        return node.nodeType === 1;
    }

    isDirective(name) {
        return name.includes('v-');
    }

    /**
     * 核心方法
     */

    compileElement(node) {
        // 带 v-model
        let attrs = node.attributes;
        Array.from(attrs).forEach(attr => {
            let attrName = attr.name;
            if (this.isDirective(attrName)) {
                // 取到对应值放到节点中
                let expr = attr.value;
                let [,type] = attrName.split('-');
                // node this.vm.$data
                CompileUtil[type](node, this.vm, expr);
            }
        })
    }

    compileText(node) {
        // 带{{}}
        let expr = node.textContent;
        let reg = /\{\{([^}]+)\}\}/g;
        if (reg.test(expr)) {
            // node this.vm.$data.text
            CompileUtil['text'](node, this.vm, expr);
        }
    }

    compile(fragment) {
        // 需要递归
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                // 元素节点，继续检查
                // 编译元素
                this.compileElement(node);
                this.compile(node);
            } else {
                //文本节点
                // 编译文本
                this.compileText(node);
            }
        })
    }

    node2fragment(el) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = el.firstChild) {
            fragment.append(firstChild);
        }
        return fragment; // 内存中的节点
    }
}

CompileUtil = {
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev,next) => {
            return prev[next];
        }, vm.$data)
    },
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            return this.getVal(vm, arguments[1]);
        })
    },
    // 文本处理
    text(node, vm, expr) {
        let updateFn = this.updater['textUpdater'];
        let value = this.getTextVal(vm, expr);
        expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            new Watcher(vm, arguments[1], (newValue) => {
                // 如果数据变化了，文本节点需要重新获取依赖的属性更新文本中的内容
                updateFn && updateFn(node, this.getTextVal(vm, expr));
            })
        })
        
        updateFn && updateFn(node, value)
    },
    setVal(vm, expr, value) {
        expr = expr.split('.');
        return expr.reduce((prev, next, currentIndex) => {
            if (currentIndex === expr.length - 1) {
                return prev[next] = value;
            }
            return prev[next];
        }, vm.$data);
    },
    // 输入框处理
    model(node, vm, expr) {
        let updateFn = this.updater['modelUpdater'];
        // 这里应该加一个监控，数据变化了，应该调用watch的callback
        new Watcher(vm, expr, (newValue) => {
            updateFn && updateFn(node, this.getVal(vm, expr));
        });
        node.addEventListener('input', (e) => {
            let newValue = e.target.value;
            this.setVal(vm, expr, newValue);
        })
        updateFn && updateFn(node, this.getVal(vm, expr));
    },
    updater: {
        textUpdater(node, value) {
            node.textContent = value;
        },
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}
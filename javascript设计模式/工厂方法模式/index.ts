/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-30 00:42:35
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-03 00:57:43
 * @Description: 工厂方法模式
 */

interface IKeyboardFactory {
    getInstance: () => Keyboard;
}

class HPKeyboardFactory implements IKeyboardFactory {
    getInstance () {
        return new HPKeyboard();
    }
}

class DellKeyboardFactory implements IKeyboardFactory {
    getInstance () {
        return new DellKeyboard();
    }
}

// 为每个键盘子类建立一个对应的工厂子类，这些工厂子类实现同一个抽象工厂接口
// 这样，创建不同品牌的键盘，只需要实现不同的工厂子类，当有新品牌加入时，新建具体工厂继承抽象工厂，而不用修改任何一个类
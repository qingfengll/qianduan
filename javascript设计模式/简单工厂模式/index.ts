/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-30 00:24:01
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-03 00:54:29
 * @Description: 简单工厂模式
 */

interface Keyboard {
    print: () => void;
    input: () => void;
}

class HPKeyboard implements Keyboard {
    print() {

    }
    input() {
        
    }
}

class DellKeyboard implements Keyboard {
    print() {

    }
    input() {
        
    }
}

class KeyboardFactory {
    getInstance(brand) {
        switch(brand) {
            case 'hp':
                return new HPKeyboard();
            case 'dell':
                return new DellKeyboard();
        }
    }
}

// 如果增加新的键盘子类，就需要增加新的if-else，扩展性差，违背了开闭原则
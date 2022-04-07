/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-30 10:14:33
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-03 01:23:18
 * @Description: 抽象工厂方法
 */

class AbsractFactory {
    createKeyboard() {
        throw new Error('不能调用抽象方法，请自己实现');
    }

    createMonitor() {
        throw new Error('不能调用抽象方法，请自己实现');
    }
}

class HPFactory extends AbsractFactory {
    createKeyboard() {
        return new HPKeyboard();
    }

    createMonitor() {
        return new HPMonitor();
    }
}

class DellFactory extends AbsractFactory {
    createKeyboard() {
        return new DellKeyboard();
    }

    createMonitor() {
        return new DellMonitor();
    }
}

class AbstractKeyboard {
    print() {
        throw new Error('不能调用抽象方法，请自己实现');
    }
}

class HPKeyboard extends AbstractKeyboard {
    print() {
        console.log('hp keyboard')
    }
}

class DellKeyboard extends AbstractKeyboard {
    print() {
        console.log('dell keyboard')
    }
}

class AbstractMonitor {
    show() {
        throw new Error('不能调用抽象方法，请自己实现');
    }
}

class HPMonitor extends AbstractMonitor {
    show() {
        console.log('hp monitor show');
    }
}

class DellMonitor extends AbstractMonitor {
    show() {
        console.log('dell monitor show');
    }
}

const hp = new HPFactory();
const hpKeyboard = hp.createKeyboard();
const hpMonitor = hp.createMonitor();

const dell = new DellFactory();
const dellKeyboard = dell.createKeyboard();
const dellMonitor = dell.createMonitor();
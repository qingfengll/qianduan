/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-29 00:21:14
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-07-29 22:41:02
 * @Description: 开闭原则
 */

interface Computer {
    getPrice: () => Number;
    getSize: () => String;
}

class Mac implements Computer {

    price: 10000;
    size: '13.3'

    getPrice() {
        return this.price;
    }
    getSize() {
        return this.size;
    }
}

// 后续遇到双十一或618 要做活动，对电脑进行打折
// 有的人会在Mac类上直接进行修改，但是这肯定是不好的。
// 应该声明一个关于折扣的类，进行扩展

class discountMac extends Mac {
    getDiscountPrice() {
        return this.getPrice() * 0.5;
    }
}
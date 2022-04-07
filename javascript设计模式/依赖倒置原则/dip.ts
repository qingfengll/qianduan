/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-28 23:38:23
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-07-28 23:52:47
 * @Description: 依赖倒置原则
 */

class Anta {
    sell() {
        return 'anta';
    }
}

class Nike {
    sell() {
        return 'nike';
    }
}

class Customer1 {
    shopping(shop: Nike) {
        console.log(shop.sell());
    }
}

// 如果顾客想从另一家商店购物，就要将该代码修改
class Customer2 {
    shopping(shop: Anta) {
        console.log(shop.sell());
    }
}
// 顾客每更换一家商店，都要修改一次代码，明显违背开闭原则
// 存在以上缺点的原因是：顾客类设计时同具体的商店类绑定了，违背了依赖倒置原则。
// 解决方法，定义Nike和Anta的公共接口Shop，顾客类面向该接口编程

interface Shop {
    sell: () => String
}
class newAnta implements Shop {
    sell() {
        return 'anta'
    }
}

class newNike implements Shop {
    sell() {
        return 'nike'
    }
}

class Customer {
    shopping(shop: Shop) {
        shop.sell();
    }
}

class Test {
    test() {
        const customer = new Customer();
        customer.shopping(new newAnta());
        customer.shopping(new newNike());
    }
}
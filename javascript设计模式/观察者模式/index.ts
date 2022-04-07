/*
 * @Autor: guoyux.wang
 * @Date: 2021-08-01 11:54:21
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-08-01 12:56:51
 * @Description: 观察者模式
 */

// 被观察者
class Subject {
    observers = [];

    add(observer) {
        this.observers.push(observer);
    }
    
    notify(...args) {
        this.observers.forEach(observer => observer.update(...args));
    }
}

// 观察者
class Observer {
    update(...args) {
        console.log('do something');
    }
}

const sub = new Subject(); /* 系统 */
sub.add(new Observer()); /* 张三点了预约 */
sub.add(new Observer()); /* 李四点了预约 */
sub.notify(); /* 双十一了，通知所有点了预约的人来抢货了 */
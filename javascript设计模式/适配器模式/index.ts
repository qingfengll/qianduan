/*
 * @Autor: guoyux.wang
 * @Date: 2021-07-31 22:53:46
 * @LastEditors: guoyux.wang
 * @LastEditTime: 2021-07-31 22:58:56
 * @Description: 适配器模式
 */

class GooleMap {
    show() {
        console.log('开始渲染谷歌地图');
    }
}

class BaiduMap {
    display() {
        console.log('开始渲染百度地图');
    }
}

class BaiduMapAdapter extends BaiduMap {
    constructor() {
        super();
    }

    show() {
        this.display();
    }
}

function renderMap(map) {
    map.show();
}

renderMap(new GooleMap());
renderMap(new BaiduMapAdapter());
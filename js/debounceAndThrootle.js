function debounce(func, delay) {
    let timer = null;
    return function () {
        let args = arguments;
        let context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(context, args);
        }, delay)
    }
}

function throotle(func, delay) {
    let preTime = Date.now();
    return function () {
        let nowTime = Date.now();
        let args = arguments;
        let context = this;
        if (nowTime - preTime >= delay) {
            func.apply(context, args);
            preTime = Date.now();
        }
    }
}

function throotleByTimer(func, delay) {
    let timer = null;
    return function() {
        let args = arguments;
        let context = this;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }, delay)
        }
    }
}

function commonRequest(reqOptions, successFunc, errFunc) {
    const { url, method, timeout, data, responseType } = reqOptions;
    let request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    request.onreadystatechange = function () {
        if (!request || request.readyState !== 4) {
            return;
        }
        // 没有收到response，由onerror处理
        // 文件协议状态码始终返回0
        if (request.status === 0 || !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
        }
        const responseData = !responseType || responseType === 'text' ? request.responseText : request.response;
        const response = {
            status: request.status,
            data: responseData
        }
        successFunc(response);
        // 清除request
        request = null;
    }

    request.onabort(function() {
        errFunc('error');
        request = null;
    });

    request.onerror(function() {
        errFunc('error');
        request = null;
    });

    request.ontimeout(function() {
        const timeoutMessage = 'timeout of ' + timeout + 'ms exceeded';
        errFunc(timeoutMessage);
        request = null;
    })
    request.send(data);
}

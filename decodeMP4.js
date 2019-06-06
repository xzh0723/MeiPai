
function getHex(e) {
    return {
        str: e.substring(4),
        hex: e.substring(0, 4).split("").reverse().join("")
    }
}

function getDec(e) {
    var t = parseInt(e, 16).toString();
        return {
        pre: t.substring(0, 2).split(""),
        tail: t.substring(2).split("")
    }
}

function substr(e, t) {
    var n = e.substring(0, t[0])
      , r = e.substr(t[0], t[1]);
    return n + e.substring(t[0]).replace(r, "")
}

function getPos(e, t) {
    return t[0] = e.length - t[0] - t[1],
    t
}

function decode(e) {
    var t = getHex(e)
      , n = getDec(t.hex)
      , r = substr(t.str, n.pre);
    // return window.atob(substr(r, getPos(r, n.tail)))
    // 注意：node环境下没有window.atob()这个方法，需要改成new Beffer()
    // 输出为base64格式的字符串，之后需要进行base64解码
    return new Buffer(substr(r, getPos(r, n.tail))).toString()
}

// 如果要用在控制台执行console.log, 请将new Buffer()方法注释掉, 打开上面那行window.atob()
console.log(decode('9880aHXR0cDovL212dmlkZW8xMC5tZWl0dWRhdGEuY29tLzVjZTc2ODllYWFkZDZ6NXhva2V2dmQxMTUwX0gyNjRfMV8xMzUwODRkNTgyYjMzYy5tcDQ/az1lMWJlYjBkZmIxNDA1Mjc2ZThiNjFkNTk0Y2FlMmZiNyZ0PTVjB5IVQZmIwNTVh'))
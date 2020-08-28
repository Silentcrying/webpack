import './index.css';

setTimeout(function() {
    console.log('定时器实现setInterval')
}, 1000)

function setInterval(func, t) {
    const inter = function() {
        setTimeout(inter, t)
        const date = new Date().getTime()
        try {
            func.call(this, date)
        } catch {}
    }
    setTimeout(inter, t)
};

setInterval(function(value) {
    console.log('定时器实现延时器', value)
}, 1000)
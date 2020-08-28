const a = [1,2,3,4];
const b = [5,6,7,8];
const c = [9,10,11,12];
const d = [13,14,15,16];
let obj = {
    tarSrc: '',
    tarMid: '',
    oriSrc: '',
    oriMid: ''
};
export const prints = (objs) => {
    console.log('這裏是print', objs)
    let ob = {
        name: 'tingitng'
    }
    
    let c = []
    c.push(Object.assign({}, {}, objs).tarSrc)
    return c;
}
let p = [];

const data = a.map((item, index) => {
    obj.tarSrc = item.toString();
    obj.tarMid = b[index].toString();
    obj.oriSrc = c[index].toString();
    obj.oriMid = d[index].toString();

   
    const dd = prints(obj);
    console.log(dd,787833)
    // p.concat(...p)
    // console.log([...p])
    return dd;
})
console.log(data)


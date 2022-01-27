console.log(11);
// let info: inits = "age" || "name"
// type init2<T> = {
//     [p in keyof T]: string
// }
// let as: init2<init> = {
//     name: "111",
//     age: "11"
// }
var pick = function (t, arr) {
    return arr.map(function (m) { return t[m]; });
};
var p = pick({ name: "aaa", age: 11 }, ['name']);
console.log(p);
var obj = {
    a: '1',
    b: 3,
    c: 2
};
// function changeObjValueByKey<O, K extends keyof O>( item: O, key: K, value: O[K]) {
//     item[key] = value
//     console.log(item);
//   }
function changeObjValueByKey(item, key, value) {
    item[key] = value;
}
var pList2 = [
    {
        name: '22222',
        age: 23
    },
    {
        name: 'rterte',
        age: 23
    }
];
var pList1 = [
    {
        name: "1111"
    },
    {
        name: "5555555555"
    }
];
function changePersonInfo(itemName) {
    pList2.map(function (item, index) {
        changeObjValueByKey(item, itemName, pList1[index][itemName]);
    });
}
changePersonInfo('name');
console.log('pList2', pList2);

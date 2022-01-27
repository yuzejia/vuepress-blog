console.log(11);

interface init {
    name: string,
    age: number
}

type inits = (keyof init);
// let info: inits = "age" || "name"

// type init2<T> = {
//     [p in keyof T]: string
// }

// let as: init2<init> = {
//     name: "111",
//     age: "11"
// }


const pick = <T, p extends keyof T>(t: T,arr: p[]): any[] => {
   return arr.map((m) => t[m] )
}


const p = pick<init, inits>({name: "aaa", age: 11}, ['name'])
console.log(p);
let obj = {
    a: '1',
    b: 3,
    c: 2
}
// function changeObjValueByKey<O, K extends keyof O>( item: O, key: K, value: O[K]) {
//     item[key] = value
//     console.log(item);
    
//   }

  function changeObjValueByKey<O, K extends keyof O>(
    item: O,
    key: K,
    value: O[K]
  ) {
    item[key] = value
  }

  interface Person {
      name: string
  }
  let pList2 = [
    {
        name: '22222',
        age: 23
    },
    {
        name: 'rterte',
        age: 23
    }
]
  let pList1 = [
      {
        name: "1111"
      },
      {
        name: "5555555555"
      }
  ]
  function changePersonInfo(itemName: keyof Person) {
    pList2.map((item, index) => {
      changeObjValueByKey(item, itemName, pList1[index][itemName])
    })
  }

  changePersonInfo('name')

  console.log('pList2', pList2);
  
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

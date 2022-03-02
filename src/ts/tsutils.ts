import { type } from "os";

/**
 * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.
 */
type Awaited<T> =
    T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
        T extends object & { then(onfulfilled: infer F): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
            F extends ((value: infer V, ...args: any) => any) ? // if the argument to `then` is callable, extracts the first argument
                Awaited<V> : // recursively unwrap the value
                never : // the argument to `then` was not callable
        T; // non-object or non-thenable

interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}

/**
 * Make all properties in T optional
 * 将T中的所有属性设置为可选
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

type obj = {
    name: string,
    age: number
}

// 例子
const o1: Partial<obj> = {
    name: 'YZJ'
}

/**
 * Make all properties in T required
 * 使T中的所有属性都是必需的
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};

// 例子
const o2: Required<obj> = {
    name: "YZJ",
    age: 26
}

/**
 * Make all properties in T readonly
 * 使T中所有的属性都是可读
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

const o3: Readonly<obj> = {
     name: "YZJ",
    age: 26
}

// 修改 报错
o3.age = 27

/**
 * From T, pick a set of properties whose keys are in the union K
 * 从T中，选择一组键位于并集K中的属性
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface pObj  {
    name: string,
    age: number,
    value: string
}

type p1 = Pick<pObj, "name">
type p2 = Pick<pObj, "name" | "age">

/**
 * Construct a type with a set of properties K of type T
 * 构造一个具有一组类型为T的属性K的类型
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type l = "a" | "b" | "c"
const a: Record<l, number> = {
    a: 2,
    b: 3,
    c: 2
}

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;

/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic;

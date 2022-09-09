declare function type(data: any): string;
declare function isArray(data: any): boolean;
declare function isObject(data: any): boolean;
declare function isIterable(data: any): boolean;
declare let addPropertyArray: (name: string, func: (...args: any) => any) => void;
declare let addFunctionArray: (name: string, func: (...args: any) => any) => void;
interface Array<T> {
    toObject(): {
        [key: string]: any;
    };
    _toString(): string;
    search(item: any): string[];
    deleteIndex(spaces?: number | number[]): any[];
    getData(route: string): any;
    max(number: number): any[];
    end: number;
    endItem(): T;
    endDelete(): T[];
    compare(arr: any[]): boolean;
    upLevel(): any[];
}

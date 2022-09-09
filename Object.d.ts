import Json from '@agacraft/classes/Json';
declare global {
    interface Object {
        toJson<T>(this: T): Json<T>;
        _toString(this: Object): string;
        toArray(this: Object): [string, any][];
        keys(this: Object): string[];
        format(this: Object, obj: {
            [key: string]: any;
        }): Boolean;
        compare(this: Object, obj: {
            [key: string]: any;
        }): Boolean;
        getData(this: Object, route: string): any;
        delete<T>(this: T, key: string): T;
        search(this: Object, item: any): string[];
    }
}

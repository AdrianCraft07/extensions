declare function addFunctionNumber(name: string, func: (...args: any) => any): void;
interface Number {
    round(precision?: number): number;
    absolute(): number;
    raised(raised: number): number;
    root(root: number): number;
}

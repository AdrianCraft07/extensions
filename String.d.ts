declare global {
    interface String {
        toFile(path: string): void;
        replaceFull(replaces: string[], sign?: string): string;
        toObject(): Object;
        toRegExp(flags?: string): RegExp;
        reverse(): string;
        setLength(length: number): string;
    }
}
export {};

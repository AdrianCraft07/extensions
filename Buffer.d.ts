declare global {
    interface Buffer {
        toFile(path?: string): void;
    }
}
export {};

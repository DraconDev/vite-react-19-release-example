export function DummyPromise(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake");
        }, 2000);
    });
}

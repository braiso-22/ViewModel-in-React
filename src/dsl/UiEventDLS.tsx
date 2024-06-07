export class UiEvent{}

type ConstructorOf<T> = new (...args: any[]) => T;

export function when(event: UiEvent) {
    const actions = {
        option <T extends UiEvent>(eventType: ConstructorOf<T>) {
            return {
                do(fn: (event: T) => void) {
                    if (event instanceof eventType) {
                        fn(event);
                    }
                    
                    return actions;
                }
            }
        }
    };

    return actions;
}

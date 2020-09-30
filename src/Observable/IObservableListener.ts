/**
 * A listener function which can be passed to IObservable.
 */
export interface IObservableListener<T> {
   (value: T): void;
}

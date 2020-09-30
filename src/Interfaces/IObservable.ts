/**
 * Object which can be observed for changes.
 */
export interface IObservable<T> {
   /**
    * Register a function to be called when the Observable changes.
    * @param handler Function to be called when the Observable changes.
    */
   onChange(listener: IObservableListener<T>): void;

   /**
    * Remove an observing function from the Observable.
    * @param handler Function to be removed.
    */
   removeOnChange(listener: IObservableListener<T>): void;
}

/**
 * A listener function which can be passed to IObservable.
 */
export interface IObservableListener<T> {
   (value: T): void;
}

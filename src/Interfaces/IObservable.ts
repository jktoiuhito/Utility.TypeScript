import { IObservableListener } from "./IObservableListener";

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
   removeOnChange(listener: (value: T) => void): void;
}

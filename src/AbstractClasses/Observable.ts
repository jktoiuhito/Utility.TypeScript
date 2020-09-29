import { IObservable, IObservableListener } from "../Interfaces";

/**
 * Object which can be observed for changes.
 */
export abstract class Observable<T> implements IObservable<T> {
   private readonly _listeners: IObservableListener<T>[] = [];

   /**
    * Notify observers about change.
    * @param value The changed value.
    */
   protected readonly changed = (value: T): void =>
      this._listeners.forEach((l) => l(value));

   /**
    * @inheritdoc
    */
   public readonly onChange = (handler: IObservableListener<T>): void => {
      this._listeners.push(handler);
      return;
   };

   /**
    * @inheritdoc
    */
   public readonly removeOnChange = (handler: IObservableListener<T>): void => {
      const index = this._listeners.indexOf(handler);
      if (index >= 0) {
         this._listeners.splice(index, 1);
      }
      return;
   };
}

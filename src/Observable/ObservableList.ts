import { ArgumentOutOfRangeError } from "../Errors";
import { IList, IPredicate } from "../Interfaces/";
import { Observable } from "../AbstractClasses";

/*
   A list has changed iff
      - a value is added to it
      - a value is removed from it
      - order of its values changes
      - a value it contains changes.

   Because stock JS Array.prototype -methods are not pure,
   some precautions need to be taken:
   
   1. The underlying array is not revealed to functions.
   2. All values of the array must be IObservable.
 */

/**
 * A list which can be observed for changes.
 */
export class ObservableList<T extends Observable<T>>
   extends Observable<ObservableList<T>>
   implements IList<T> {
   private readonly _values: T[];

   /**
    * A list which can be observed for changes.
    * @param array Array to base the list on.
    */
   constructor(array: T[] | null = null) {
      super();
      this._values = [];
      if (array) {
         array.forEach((v) => {
            v.onChange(() => this.changed(this));
            this._values.push(v);
         });
      }
   }

   // IList<T>

   /**
    * @inheritdoc
    */
   public length(): number {
      return this._values.length;
   }

   /**
    * @inheritdoc
    */
   public readonly getItem = (index: number): T => {
      if (index <= 0 || this._values.length <= index) {
         throw new ArgumentOutOfRangeError("index");
      }
      return this._values[index];
   };

   /**
    * @inheritdoc
    */
   public readonly every = (predicate: IPredicate<T>): boolean => {
      return this._values.every(predicate);
   };

   /**
    * @inheritdoc
    */
   public readonly filter = (predicate: IPredicate<T>): T[] => {
      return this._values.filter(predicate);
   };

   /**
    * @inheritdoc
    */
   public readonly find = (predicate: IPredicate<T>): T | undefined => {
      return this._values.find(predicate);
   };

   /**
    * @inheritdoc
    */
   public readonly findIndex = (predicate: IPredicate<T>): number => {
      return this._values.findIndex(predicate);
   };

   /**
    * @inheritdoc
    */
   public readonly forEach = (
      callbackfn: (value: T, index: number, array: readonly T[]) => void
   ): ObservableList<T> => {
      this._values.forEach(callbackfn);
      return this;
   };

   /**
    * @inheritdoc
    */
   public readonly map = <U>(
      callbackfn: (value: T, index: number, array: readonly T[]) => U
   ): U[] => {
      return this._values.map<U>(callbackfn);
   };

   /**
    * @inheritdoc
    */
   public readonly push = (item: T): ObservableList<T> => {
      this._values.push(item);
      return this;
   };

   /**
    * @inheritdoc
    */
   public readonly reverse = (): ObservableList<T> => {
      this._values.reverse();
      this.changed(this);
      return this;
   };

   // TODO!

   /**
    * Lajittele NYKYINEN lista annetun lajittelufunktion avulla.
    * @param compareFn Lajitteluun käytetty funktio.
    */
   public readonly sort = (
      compareFn: (a: T, b: T) => number
   ): ObservableList<T> => {
      // TODO: entä jos lajittelu ei muutakkaan listaa?

      this._values.sort(compareFn);
      this.changed(this);
      return this;
   };
}

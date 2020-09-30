import { ArgumentOutOfRangeError } from "../Errors";
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
export class ObservableList<T extends Observable<T>> extends Observable<
   ObservableList<T>
> {
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

   // Array.prototype -methods and fields

   /**
    * Get an item from the list.
    * @param index Index of the item.
    * @throws {ArgumentOutOfRangeError} Index is under zero or greater than the
    * length of the list.
    */
   public readonly getItem = (index: number): T => {
      if (index <= 0 || this._values.length <= index) {
         throw new ArgumentOutOfRangeError("index");
      }
      return this._values[index];
   };

   /**
    * Assert whether all values in the list match the predicate
    * function.
    * @param predicate Predicate to match every value on the list on.
    */
   public readonly every = (
      predicate: IObservableListPredicate<T>
   ): boolean => {
      return this._values.every(predicate);
   };

   /**
    * Get all values which match the given predicate.
    * The values are returned in a new array.
    * @param predicate Predicate to match values with.
    */
   public readonly filter = (predicate: IObservableListPredicate<T>): T[] => {
      return this._values.filter(predicate);
   };

   /**
    * Find and return the first value which matches the predicate.
    * Returns undefined if no values are found.
    * @param predicate Predicate for finding the value.
    */
   public readonly find = (
      predicate: IObservableListPredicate<T>
   ): T | undefined => {
      return this._values.find(predicate);
   };

   /**
    * Find and return the index of the first value which matches the predicate.
    * Returns -1 if no values are found.
    * @param predicate Predicate for finding the value.
    */
   public readonly findIndex = (
      predicate: IObservableListPredicate<T>
   ): number => {
      return this._values.findIndex(predicate);
   };

   /**
    * Call a function for every value on the list.
    * @param callbackfn Function to call for every value on the list.
    */
   public readonly forEach = (
      callbackfn: (value: T, index: number, array: readonly T[]) => void
   ): ObservableList<T> => {
      this._values.forEach(callbackfn);
      return this;
   };

   /**
    * Length of the list.
    */
   public get length(): number {
      return this._values.length;
   }

   /**
    * Map the list into a new list using the given function.
    * @param callbackfn Function used to map the list to a new list.
    */
   public readonly map = <U>(
      callbackfn: (value: T, index: number, array: readonly T[]) => U
   ): U[] => {
      return this._values.map<U>(callbackfn);
   };

   /**
    * Append an item to the end of the list.
    * @param item Item to add to the list.
    */
   public readonly push = (item: T): ObservableList<T> => {
      this._values.push(item);
      this.changed(this);
      return this;
   };

   /**
    * Reverse the values of the list.
    */
   public readonly reverse = (): ObservableList<T> => {
      this._values.reverse();
      this.changed(this);
      return this;
   };

   // TODO!

   /**
    * Sort the list in-place with the given sorting function.
    * @param compareFn Function used in sorting the list.
    */
   public readonly sort = (
      compareFn: (a: T, b: T) => number
   ): ObservableList<T> => {
      // TODO: assert whether the list actually has changed.

      this._values.sort(compareFn);
      this.changed(this);
      return this;
   };
}

/**
 * A function which returns a boolean based on a value.
 * Does not expose the underlying array to prevent untrackable changes.
 */
export interface IObservableListPredicate<T> {
   (value: T, index: number): boolean;
}

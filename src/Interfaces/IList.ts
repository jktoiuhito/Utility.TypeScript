import { IPredicate } from "./IPredicate";

/**
 * A list.
 */
export interface IList<T> {
   /**
    * Get an item from the list.
    * @param index Index of the item.
    * @throws {ArgumentOutOfRangeError} Index is under zero or greater than the
    * length of the list.
    */
   getItem(index: number): T;

   /**
    * Assert whether all values in the list match the predicate
    * function.
    * @param predicate Predicate to match every value on the list on.
    */
   every(predicate: IPredicate<T>): boolean;

   /**
    * Get all values which match the given predicate.
    * @param predicate Predicate to match values with.
    */
   filter(predicate: IPredicate<T>): T[];

   /**
    * Find and return the first value which matches the predicate.
    * Returns undefined if no values are found.
    * @param predicate Predicate for finding the value.
    */
   find(predicate: IPredicate<T>): T | undefined;

   /**
    * Find and return the index of the first value which matches the predicate.
    * Returns -1 if no values are found.
    * @param predicate Predicate for finding the value.
    */
   findIndex(predicate: IPredicate<T>): number;

   /**
    * Call a function for every value on the list.
    * @param callbackfn Function to call for every value on the list.
    */
   forEach(
      callbackfn: (value: T, index: number, array: readonly T[]) => void
   ): IList<T>;

   /**
    * Length of the list.
    */
   length(): number;

   /**
    * Map the list into a new list.
    * @param callbackfn Function used to map the list to a new list.
    */
   map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U): U[];

   /**
    * Append an item to the end of the list.
    * @param item Item to add to the list.
    */
   push(item: T): IList<T>;

   /**
    * Reverse the values of the list.
    */
   reverse(): IList<T>;
}

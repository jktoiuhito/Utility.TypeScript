/**
 * A function which returns a boolean based on a value.
 */
export interface IPredicate<T> {
   (value: T, index: number, array: readonly T[]): boolean;
}

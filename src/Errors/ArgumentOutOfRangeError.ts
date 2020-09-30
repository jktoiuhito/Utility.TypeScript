import { ArgumentError } from "./ArgumentError";

/**
 * Error which is thrown when an arguments value is outside its allowed range.
 */
export class ArgumentOutOfRangeError extends Error {
   /**
    * Error which is thrown when an arguments value is outside its allowed
    * range.
    * @param paramName Name of the parameter.
    * @throws {ArgumentError} Name is undefined, null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(paramName: string) {
      if (paramName === undefined) {
         throw new ArgumentError("Name cannot be undefined");
      } else if (paramName === null) {
         throw new ArgumentError("Name cannot be null");
      } else if (typeof paramName !== "string") {
         throw new ArgumentError("Name must be of type string");
      } else if (paramName === "") {
         throw new ArgumentError("Name cannot be empty");
      } else if (!paramName.trim()) {
         throw new ArgumentError("Name cannot consist only of whitespace");
      }

      super(`Value of '${paramName.trim()}' was outside the allowed range`);
   }
}

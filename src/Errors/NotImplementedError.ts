import { ArgumentError } from "./ArgumentError";

/**
 * Error which is thrown when a function is not implemented.
 */
export class NotImplementedError extends Error {
   /**
    * Error which is thrown when a function is not implemented.
    * @param name Name of the function.
    * @throws {ArgumentError} Name is not string, is empty or consists only of
    * whitespace.
    */
   constructor(name: string | undefined = undefined) {
      if (name !== undefined && name !== null) {
         if (typeof name !== "string") {
            throw new ArgumentError("Name must be of type string");
         } else if (name === "") {
            throw new ArgumentError("Name cannot be empty");
         } else if (!name.trim()) {
            throw new ArgumentError("Name cannot consist only of whitespace");
         }
      }

      // note spacing around name.
      super(
         `The function or method ${
            !name ? "" : `'${name.trim()}' `
         }is not yet implemented`
      );
   }
}

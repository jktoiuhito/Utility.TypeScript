import { ArgumentError } from "./ArgumentError";

/**
 * Error which is thrown when an (inbuilt) function returns undefined or null.
 */
export class NullUndefinedReturnValueError extends TypeError {
   /**
    * Error which is thrown when an (inbuilt) function returns undefined or
    * null.
    * @param functionName Name of the function which returned undefined or null.
    * @throws {ArgumentError} functionName is undefined, null, not string, is
    * empty or consists only of whitespace.
    */
   constructor(functionName: string) {
      if (functionName === undefined) {
         throw new ArgumentError("functionName cannot be undefined");
      } else if (functionName === null) {
         throw new ArgumentError("functionName cannot be null");
      } else if (typeof functionName !== "string") {
         throw new ArgumentError("functionName must be of type string");
      } else if (functionName === "") {
         throw new ArgumentError("functionName cannot be empty");
      } else if (!functionName.trim()) {
         throw new ArgumentError(
            "functionName cannot consist only of whitespace"
         );
      }

      super(`Function '${functionName.trim()}' returned null or undefined`);
   }
}

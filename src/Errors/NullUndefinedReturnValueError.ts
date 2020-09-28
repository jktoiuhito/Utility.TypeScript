/**
 * Error which is thrown when an (inbuilt) function returns undefined or null.
 */
export default class NullUndefinedReturnValueError extends TypeError {
   /**
    * Error which is thrown when an (inbuilt) function returns undefined or
    * null.
    * @param functionName Name of the function which returned undefined or null.
    */
   constructor(functionName: string) {
      super(`Function '${functionName}' returned null or undefined`);
   }
}

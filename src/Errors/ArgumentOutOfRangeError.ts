/**
 * Error which is thrown when an arguments value is outside its allowed range.
 */
export default class ArgumentOutOfRangeError extends Error {
   /**
    * Error which is thrown when an arguments value is outside its allowed
    * range.
    * @param paramName Name of the parameter.
    */
   constructor(paramName: string) {
      super(`Value of '${paramName}' was outside the allowed range`);
   }
}

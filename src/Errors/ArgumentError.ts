/**
 * Error which is thrown when an argument passed to a function is inappropriate.
 */
export default class ArgumentError extends Error {
   /**
    * Error which is thrown when an argument passed to a function is
    * inappropriate.
    * @param reason Reason the error is thrown.
    * @param paramName Name of the inappropriate parameter.
    */
   constructor(reason: string, paramName: string | null = null) {
      super((paramName ? `'${paramName}': ` : "") + reason);
   }
}

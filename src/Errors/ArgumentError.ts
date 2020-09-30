/**
 * Error which is thrown when an argument passed to a function is inappropriate.
 */
export class ArgumentError extends Error {
   /**
    * Error which is thrown when an argument passed to a function is
    * inappropriate.
    * @param reason Reason the error is thrown.
    * @param paramName Name of the inappropriate parameter.
    * @throws {ArgumentError} Reason is undefined, null, empty or consist only
    * of whitespace.
    */
   constructor(reason: string, paramName: string | undefined = undefined) {
      if (reason === undefined) {
         throw new ArgumentError("Reason cannot be undefined");
      } else if (reason === null) {
         throw new ArgumentError("Reason cannot be null");
      } else if (!reason) {
         throw new ArgumentError("Reason cannot be empty");
      } else if (!reason.trim()) {
         throw new ArgumentError(
            "Reason cannot only consist of whitespace characters"
         );
      } else if (paramName === "") {
         throw new ArgumentError("Name cannot be empty");
      } else if (paramName && !paramName.trim()) {
         throw new ArgumentError("Name cannot only consist of whitespace");
      }
      super(
         (paramName && paramName.trim() ? paramName.trim() + ": " : "") +
            reason.trim()
      );
   }
}

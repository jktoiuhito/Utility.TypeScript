/**
 * Error which is thrown when a function is not implemented.
 */
export class NotImplementedError extends Error {
   /**
    * Error which is thrown when a function is not implemented.
    * @param name Name of the function.
    */
   constructor(name: string | undefined = undefined) {
      // note spacing around name.
      super(
         `The function or method ${
            !name ? "" : !name.trim() ? "" : `'${name.trim()}' `
         }is not yet implemented`
      );
   }
}

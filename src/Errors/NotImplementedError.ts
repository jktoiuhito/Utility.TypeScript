/**
 * Error which is thrown when a function is not implemented.
 */
export default class NotImplementedError extends Error {
   /**
    * Error which is thrown when a function is not implemented.
    * @param name Name of the function.
    */
   constructor(name: string | null = null) {
      // note spacing around name.
      super(
         `The function or method ${
            name ? `'${name}' ` : ""
         }is not yet implemented`
      );
   }
}

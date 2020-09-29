/**
 * Error which is thrown when a collection is empty.
 */
export class EmptyCollectionError extends TypeError {
   /**
    * Error which is thrown when a collection is empty.
    * @param name Name of the collections variable or parameter.
    */
   constructor(name: string) {
      super(`'${name}' cannot be empty`);
   }
}

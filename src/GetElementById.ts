import { Assert } from "./Assert";

/**
 * Get a HTMLElement with the given Id.
 * @param id Id of the HTMLElement.
 * @throws id is not string, is empty or contains any whitespace character.
 */
export const GetElementById = <T extends HTMLElement>(id: string): T => {
   return Assert(
      document.getElementById(id),
      id
   ).isObject.isNotNull.isInstanceOf(HTMLElement).value as T;
};

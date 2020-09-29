//TODO: fails to run, syntax error on import

import { ArgumentError } from "../build";

test("a simple sample test", () =>
   expect(() => {
      throw new ArgumentError();
   }).toThrow(ArgumentError));

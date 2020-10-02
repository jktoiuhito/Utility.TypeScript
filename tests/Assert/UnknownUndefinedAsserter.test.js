"use strict";

import { UnknownUndefinedAsserter } from "../../lib/Assert/UnknownUndefinedAsserter";
import { UnknownAsserter } from "../../lib/Assert/UnknownAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.NonNullTypesExampleValues)(
      "Non-null value",
      (value) => {
         test.each([undefined, "name"])(
            "Value can be any type but null",
            (name) => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               expect(asserter).toHaveProperty("_value", value);
            }
         );

         test("Null name throws error", () => {
            const name = null;

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot be null");
         });

         test.each(Constants.NonNullStringUndefinedTypesExampleValues)(
            "Non-string name throws error",
            (name) => {
               expect(() => {
                  new UnknownUndefinedAsserter(value, name);
               }).toThrow("Name must be a string");
            }
         );

         test("Empty name throws error", () => {
            const name = "";

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot be empty");
         });

         test("Whitespace name throws error", () => {
            const name = " 　	\n\r";

            expect(() => {
               new UnknownUndefinedAsserter(value, name);
            }).toThrow("Name cannot consist only of whitespace");
         });

         test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
            "Name is trimmed",
            (name) => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               expect(asserter).toHaveProperty("_name", "name");
            }
         );
      }
   );

   test.each([undefined, "name"])("Null value throws error", (name) => {
      const value = null;

      expect(() => {
         new UnknownUndefinedAsserter(value, name);
      }).toThrow("Value cannot be null");
   });
});

/**
 * Immutability
 * TODO: isX and isNotX -methods
 */
describe.each([
   ["value", undefined],
   ["value", "name"],
])("Immutability", (value, name) => {
   describe("Existing properties", () => {
      describe.each(Constants.NonNullTypesExampleValues)(
         "Cannot be reassigned",
         (newValue) => {
            describe("By dot notation", () => {
               test("Value", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     asserter._value = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     asserter._name = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By key", () => {
               test("Value", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     asserter["_value"] = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     asserter["_name"] = newValue;
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By Object.defineProperties()", () => {
               test("Value", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _value: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _name: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });

            describe("By Object.defineProperty()", () => {
               test("Value", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperty(asserter, "_value", newValue);
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperty(asserter, "_name", newValue);
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            });
         }
      );

      describe("Cannot be removed", () => {
         describe("By delete", () => {
            test("Value", () => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               try {
                  delete asserter._value;
               } catch {
                  /* empty */
               }

               expect(asserter["_value"]).toBe(value);
            });

            test("Name", () => {
               const asserter = new UnknownUndefinedAsserter(value, name);

               try {
                  delete asserter._name;
               } catch {
                  /* empty */
               }

               expect(asserter["_name"]).toBe(name);
            });
         });

         describe.each(Constants.NonNullTypesExampleValues)(
            "By Object.defineProperties()",
            (newValue) => {
               test("Value", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _name: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_value"]).toBe(value);
               });

               test("Name", () => {
                  const asserter = new UnknownUndefinedAsserter(value, name);

                  try {
                     Object.defineProperties(asserter, { _value: newValue });
                  } catch {
                     /* empty */
                  }

                  expect(asserter["_name"]).toBe(name);
               });
            }
         );
      });
   });

   describe.each(Constants.NonNullTypesExampleValues)(
      "Undefined properties cannot be assigned",
      (newValue) => {
         test("By dot notation", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            try {
               asserter.idontexist = newValue;
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By key", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            try {
               asserter["idontexist"] = newValue;
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By Object.defineProperties()", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            try {
               Object.defineProperties(asserter, { idontexist: newValue });
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });

         describe("By Object.defineProperty()", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            try {
               Object.defineProperty(asserter, "idontexist", newValue);
            } catch {
               /* empty */
            }

            expect(asserter).not.toHaveProperty("idontexist");
         });
      }
   );

   test("Object.isExtensible() returns false", () => {
      const asserter = new UnknownUndefinedAsserter(value, name);

      expect(Object.isExtensible(asserter)).toBeFalsy();
   });

   test("Object.isFrozen() returns true", () => {
      const asserter = new UnknownUndefinedAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });

   test("Object.isSealed() returns true", () => {
      const asserter = new UnknownUndefinedAsserter(value, name);

      expect(Object.isSealed(asserter)).toBeTruthy();
   });

   test("Prototype cannot be changed with Object.setPrototypeOf()", () => {
      const asserter = new UnknownUndefinedAsserter(value, name);
      const oldProto = Object.getPrototypeOf(asserter);

      const newProto = { proto: {} };
      try {
         Object.setPrototypeOf(asserter, newProto);
      } catch {
         /* empty */
      }

      expect(Object.getPrototypeOf(asserter)).toBe(oldProto);
   });
});

/**
 * isNotUndefined
 */
describe.each([undefined, "name"])("isNotUndefined", (name) => {
   describe.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined value",
      (value) => {
         test("Returns UnknownAsserter", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown instanceof UnknownAsserter).toBeTruthy();
         });

         test("Returned UnknownAsserter has same value", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown).toHaveProperty("_value", value);
         });

         test("Returned UnknownNullAsserter has same name", () => {
            const asserter = new UnknownUndefinedAsserter(value, name);

            const unknown = asserter.isNotUndefined();

            expect(unknown).toHaveProperty("_name", name);
         });
      }
   );

   test("Undefined value throws error", () => {
      const value = undefined;
      const asserter = new UnknownUndefinedAsserter(value, name);

      const expected = name
         ? `Value of '${name}' is undefined`
         : "Value is undefined";

      expect(() => {
         asserter.isNotUndefined();
      }).toThrow(expected);
   });
});

/**
 * isUndefined
 */
describe.each([undefined, "name"])("isUndefined", (name) => {
   test.each(Constants.NonNullUndefinedTypesExampleValues)(
      "Non-undefined value throws error",
      (value) => {
         const asserter = new UnknownUndefinedAsserter(value, name);

         const expected = name
            ? `Value of '${name}' is not undefined`
            : "Value is not undefined";

         expect(() => {
            asserter.isUndefined();
         }).toThrow(expected);
      }
   );

   test("Undefined value returns undefined", () => {
      const value = undefined;
      const asserter = new UnknownUndefinedAsserter(value, name);

      const ret = asserter.isUndefined();

      expect(ret).toBe(value);
   });
});

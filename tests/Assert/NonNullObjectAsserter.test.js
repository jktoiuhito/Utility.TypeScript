"use strict";

import { NonNullObjectAsserter } from "../../lib/Assert/NonNullObjectAsserter";
import * as Constants from "../Constants";

/**
 * constructor
 */
describe("Constructor", () => {
   describe.each(Constants.ExampleNonNullObjects)("Object value", (value) => {
      test.each([undefined, "name"])("Value can be non-null object", (name) => {
         const asserter = new NonNullObjectAsserter(value, name);

         expect(asserter.value).toBe(value);
      });

      test("Undefined name is set", () => {
         const name = undefined;
         const asserter = new NonNullObjectAsserter(value, name);

         expect(asserter).toHaveProperty("_name", name);
      });

      test.each(Constants.ExampleNotStringUndefinedTypes)(
         "Non-string/undefined name throws error",
         (name) => {
            expect(() => {
               new NonNullObjectAsserter(value, name);
            }).toThrow("Name must be of type string or undefined");
         }
      );

      test("Empty name throws error", () => {
         const name = "";

         expect(() => {
            new NonNullObjectAsserter(value, name);
         }).toThrow("Name cannot be empty");
      });

      test("Whitespace name throws error", () => {
         const name = " 　	\n\r";

         expect(() => {
            new NonNullObjectAsserter(value, name);
         }).toThrow("Name cannot consist only of whitespace");
      });

      test.each(["name", "name 　	\n\r", " 　	\n\rname", " 　name	\n\r"])(
         "Name is trimmed",
         (name) => {
            const asserter = new NonNullObjectAsserter(value, name);

            expect(asserter).toHaveProperty("_name", "name");
         }
      );
   });

   describe.each([undefined, "name"])("Non-object/null value", (name) => {
      test.each(Constants.ExampleNotObjectTypes)(
         "Non-object value throws error",
         (value) => {
            expect(() => {
               new NonNullObjectAsserter(value, name);
            }).toThrow("Value must be of type object");
         }
      );

      test("Null value throws error", () => {
         const value = null;
         expect(() => {
            new NonNullObjectAsserter(value, name);
         }).toThrow("Value cannot be null");
      });
   });
});

/**
 * Immutability
 */
describe.each([Constants.ExampleNonNullObjects])("Immutability", (value) => {
   test.each([undefined, "name"])("Object is frozen", (name) => {
      const asserter = new NonNullObjectAsserter(value, name);

      expect(Object.isFrozen(asserter)).toBeTruthy();
   });
});

/**
 * isInstanceOf
 */
describe.each([undefined, "name"])("isInstanceOf", (name) => {
   test.each(Constants.ExampleNotFunctionTypes)(
      "Non-function type throws error",
      (type) => {
         const value = Constants.ExampleObject;
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow("Type must be of type function");
      }
   );

   test.each(Constants.ExamplePrototypelessFunctions)(
      "Prototypeless function throws error",
      (type) => {
         class testClass {
            value = "value";
         }
         const value = new testClass();
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow(`Type must have a defined prototype`);
      }
   );

   test.each(Constants.ExamplePrototypedFunctions)(
      "Wrong prototype throws error",
      (type) => {
         class testClass {
            value = "value";
         }
         const value = new testClass();
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.isInstanceOf(type);
         }).toThrow(`Object is not an instance of '${type.name}'`);
      }
   );

   test("Rigth type returns itself", () => {
      class testClass {
         value = "value";
      }
      const value = new testClass();
      const asserter = new NonNullObjectAsserter(value, name);

      const ret = asserter.isInstanceOf(testClass);

      expect(ret).toBe(asserter);
   });
});

/**
 * is
 */
describe.each([undefined, "name"])("is", (name) => {
   test.each(Constants.ExampleNotObjectTypes)(
      "Non-object argument throws error",
      (obj) => {
         const value = Constants.ExampleObject;
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.is(obj);
         }).toThrow("Argument must be of type object");
      }
   );

   test("Null argument throws error", () => {
      const value = Constants.ExampleObject;
      const obj = null;
      const asserter = new NonNullObjectAsserter(value, name);

      expect(() => {
         asserter.is(obj);
      }).toThrow("Argument cannot be null");
   });

   test("Referentially inequal object throws error", () => {
      const value = Constants.ExampleObject;
      const obj = {};
      const asserter = new NonNullObjectAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' is not referentially equal to the given object`
            : "object is not referentially equal to the given object";

      expect(() => {
         asserter.is(obj);
      }).toThrow(expected);
   });

   test("Referentially equal object returns itself", () => {
      const value = Constants.ExampleObject;
      const obj = value;
      const asserter = new NonNullObjectAsserter(value, name);

      const ret = asserter.is(obj);

      expect(ret).toBe(asserter);
   });
});

/**
 * isNot
 */
describe.each([undefined, "name"])("isNot", (name) => {
   test.each(Constants.ExampleNotObjectTypes)(
      "Non-object argument throws error",
      (obj) => {
         const value = Constants.ExampleObject;
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.isNot(obj);
         }).toThrow("Argument must be of type object");
      }
   );

   test("Null argument throws error", () => {
      const value = Constants.ExampleObject;
      const obj = null;
      const asserter = new NonNullObjectAsserter(value, name);

      expect(() => {
         asserter.isNot(obj);
      }).toThrow("Argument cannot be null");
   });

   test("Referentially equal object throws error", () => {
      const value = Constants.ExampleObject;
      const obj = value;
      const asserter = new NonNullObjectAsserter(value, name);

      const expected =
         name !== undefined
            ? `'${name}' is referentially equal to the given object`
            : "object is referentially equal to the given object";

      expect(() => {
         asserter.isNot(obj);
      }).toThrow(expected);
   });

   test("Referentially inequal object returns itself", () => {
      const value = Constants.ExampleObject;
      const obj = {};
      const asserter = new NonNullObjectAsserter(value, name);

      const ret = asserter.isNot(obj);

      expect(ret).toBe(asserter);
   });
});

/**
 * isMatch
 */
describe.each([undefined, "name"])("isMatch", (name) => {
   test.each(Constants.ExampleNotFunctionTypes)(
      "Non-function predicate throws error",
      (predicate) => {
         const value = Constants.ExampleObject;
         const asserter = new NonNullObjectAsserter(value, name);

         expect(() => {
            asserter.isMatch(predicate);
         }).toThrow("Predicate must be of type function");
      }
   );

   test("Predicate which expects no parameters throws error", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);

      const predicate = () => {
         /* empty */
      };

      expect(() => {
         asserter.isMatch(predicate);
      }).toThrow("Predicate must expect exactly one parameter");
   });

   test("Predicate which expects more than one parameters throws error", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const predicate = (a, b) => {
         /* empty */
      };

      expect(() => {
         asserter.isMatch(predicate);
      }).toThrow("Predicate must expect exactly one parameter");
   });

   test.each(Constants.ExampleNotBooleanTypes)(
      "Predicate which returns non-boolean value throws error",
      (ret) => {
         const value = Constants.ExampleObject;
         const asserter = new NonNullObjectAsserter(value, name);

         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const predicate = (a) => ret;

         expect(() => {
            asserter.isMatch(predicate);
         }).toThrow("Predicate must return a value of type boolean");
      }
   );

   test("Predicate thrown error is not caugth", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);
      const error = new Error("test");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const predicate = (a) => {
         throw error;
      };

      let ret;
      try {
         asserter.isMatch(predicate);
      } catch (e) {
         ret = e;
      }

      expect(ret).toBe(error);
   });

   test("Predicate returning false throws error", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const predicate = (a) => false;

      const expected =
         name !== undefined
            ? `'${name}' does not match the predicate`
            : "object does not match the predicate";

      expect(() => {
         asserter.isMatch(predicate);
      }).toThrow(expected);
   });

   test("Predicate returning true returns itself", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const predicate = (a) => true;

      const ret = asserter.isMatch(predicate);

      expect(ret).toBe(asserter);
   });

   test("Object is passed to predicate", () => {
      const value = Constants.ExampleObject;
      const asserter = new NonNullObjectAsserter(value, name);

      let passed;
      const predicate = (a) => {
         passed = a;
         return true;
      };

      asserter.isMatch(predicate);

      expect(passed).toBe(value);
   });
});

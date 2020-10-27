/**
 * Create a WebWorker from a function.
 * @param func Function to create a worker from.
 * @throws func is not a function.
 */
// Cannot be readonly. Type doesn't matter at all in this case.
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types,@typescript-eslint/ban-types
export const CreateWorker = (func: Function): Worker => {
   let code = func.toString();
   code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
   const blob = new Blob([code], { type: "application/javascript" });
   return new Worker(URL.createObjectURL(blob));
};

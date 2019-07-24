/**
 * @param {...Function}
 * @returns {Function}
 */
export default function compose(...funcs) {
  if (funcs.length === 0)  {
    return arg =>  arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return arg => {
    return funcs.reduceRight((arg, fn) => fn(arg), arg)
  }
}

export default function omit(source, excluded) {
  let result = {};
  for (let key of Object.keys(source)) {
    if (excluded.indexOf(key) >= 0) continue;
    result[key] = source[key];
  }
  return result;
}

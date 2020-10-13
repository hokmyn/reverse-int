module.exports = function reverse (n) {
  let strTmp = n.toString();
  if (strTmp.startsWith('-')) strTmp = strTmp.slice(1);
  if (strTmp.endsWith('0')) strTmp = strTmp.slice(0, -1);
  return +strTmp.split("").reverse().join("");
}

function truncate(str, maxlength) {
  let currentStr;

  if (str.length <= maxlength) {
    currentStr = str;
  } else {
    currentStr = str.slice(0, maxlength - 1) + '…';
  }

  return currentStr;
}

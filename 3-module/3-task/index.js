function camelize(str) {
  return str 
  .split('-')
  .map((words, index) => index == 0 ? words : words[0].toUpperCase() + words.slice(1))
  .join('');
}


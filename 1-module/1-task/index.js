function factorial(n) {
  
  if (n == 0 || n == 1) return 1;
  
  for (i = 0; i < n - 2; i++) {
    n = n * (n - (i + 1));
  }
  return n;
}

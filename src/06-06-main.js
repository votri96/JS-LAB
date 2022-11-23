function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random() * n;

  return Math.round(random);
}

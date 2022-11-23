function randomNumber(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);

  return 10 + Math.round(random);
}

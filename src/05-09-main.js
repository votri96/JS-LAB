// v1
function classifyStudent(mark) {
  let result;

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 6) result = 'Not Good';
  else result = 'Bad';

  return result;
}

// v2
function classifyStudent(mark) {
  let result = 'Bad';

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 6) result = 'Not Good';

  return result;
}

// v3
function classifyStudent(mark) {
  if (mark < 0 && mark > 10) return 'InValid';
  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 6) return 'Not Good';

  return 'Bad';
}

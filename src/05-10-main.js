function classifyStudent(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3:
      result = 'Bad';
      break;

    case 4:
    case 5:
    case 6:
      result = 'Good';
      break;

    case 7:
    case 8:
    case 9:
      result = 'Excellent';
      break;

    default:
      result = 'Invalid';
      break;
  }

  return result;
}

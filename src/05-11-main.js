// v1
function getErrorMessage(errorCode) {
  let result;

  switch (errorCode) {
    case 'E01':
      result = 'Invalid username or password';
      break;

    case 'E02':
      result = 'Too many attempts';
      break;

    case 'E03':
      result = 'Missing data';
      break;

    default:
      result = 'Something went wrong';
      break;
  }

  return result;
}

// v2
function getErrorMessage(errorCode) {
  const errrorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errrorMap[errorCode] || 'Something went wrong';
}

console.log(getErrorMessage('E01'));

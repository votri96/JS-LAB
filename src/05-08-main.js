// v1
function isPositiveEventNumber(n) {
  let isValid;

  if (n > 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2
function isPositiveEventNumber(n) {
  let isValid = false;

  if (n > 0) {
    isValid = true;
  }

  return isValid;
}

// v3
function isPositiveEventNumber(n) {
  if (n > 0) {
    return true;
  }

  return false;
}

//v4
function isPositiveEventNumber(n) {
  return n > 0;
}

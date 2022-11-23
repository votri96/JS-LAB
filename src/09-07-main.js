// check if all numbers is even
[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true

// check if exist one number is even
[1, 2, 4].some((x) => x % 2 === 0); // true
[1, 3, 5].some((x) => x % 2 === 0); // false

[1, 1, 1].indexOf(1); // 0
[1, 1, 1].lastIndexOf(1); // 2
['easy', 'frontend', 'easy'].indexOf('easy'); // 0
['easy', 'frontend', 'easy'].lastIndexOf('easy'); // 2
['easy', 'frontend', 'easy'].includes('easy'); // true
['frontend'].includes('easy'); // false

// SIMPLE REGEX PATTERN
var regex = /hello/;

console.log(regex.test('hello world'));

// REGULAR EXPRESSION LITERAL

// Find Globally 
var regexGlobal = /abc/g;

console.log(regexGlobal.test('abc abc'));

// Finds Case Sensitive characters
var regexInsensitive = /abc/i;

console.log(regexInsensitive.test('Abc'));

// REGULAR EXPRESSION CONSTRUCTOR
 
var regexGlobal1 = new RegExp('abc', 'g');

console.log(regexGlobal1.test('abc abc'));

var regexInsensitive1 = new RegExp('abc', 'i');

console.log(regexInsensitive1.test('Abc'));

// CHARACTER GROUPS 

// Finds true with characters in []
var regex = /[bt]ear/;

console.log(regex.test('tear'));
console.log(regex.test('bear'));
console.log(regex.test('fear'));

// NEGATED CHARACTER SET
// Caret ^ finds false with characters in []
var regex = /[^bt]ear/;

console.log(regex.test('tear'));
console.log(regex.test('bear'));
console.log(regex.test('fear'));

// RANGES [a-z]
// Matches all letters between a-z
var regex = /[a-z]ear/;

console.log(regex.test('fear'));
console.log(regex.test('tear'));

// META CHARACTERS

// \d - matches any digit character (same as [0-9])
// \w - matches any word character meaning 'any' letter, digit and underscore ( [a-zA-Z0-9_])
// \s - matches whitespace ( spaces or tabs )
// \t - matches a 'tab' character only
// \b - matches at beginning or ending of a word 
// .(period) - matches any character except for newline
// \D - matches any NON-digit character ( [^0-9] )
// \W - matches any NON-word character ( [^a-zA-Z0-9+] )
// \S - matches anhy NON-whitespace character

// QUANTIFIERS

// +(plus sign) - matches the preceding expression 1 or more times

var regex = /\d+/;

console.log(regex.test('8'));
console.log(regex.test('88899'));
console.log(regex.test('8888845'));

// *(asterik symbol) - matches the preceding expression 0 or more times

var regex = /go*d/;

console.log(regex.test('gd'));
console.log(regex.test('god'));
console.log(regex.test('good'));
console.log(regex.test('goood'));

// ? - matches the preceding expression 0 or 1 time

var regex = /goo?d/;

console.log(regex.test('god'));
console.log(regex.test('good'));
console.log(regex.test('goood'));

// ^ - matches the begininng of the strings

var regex = /^g/;

console.log(regex.test('good'));
console.log(regex.test('bad'));
console.log(regex.test('tag'));

// $ - matches the end of the string

var regex = /.com$/;

console.log(regex.test('test@testmail.com'));
console.log(regex.test('test@testmail'));

// {N} - matches 'exactly' N occurrences of the precedig regualar expression

var regex = /go{2}d/;

console.log(regex.test('god'));
console.log(regex.test('good'));

// {N,} - matches at 'least' N occurences of the preceding regualr expression 

var regex = /go{2,}d/;

console.log(regex.test('god'));
console.log(regex.test('good'));
console.log(regex.test('goood'));
console.log(regex.test('gooood'));

// {N,M} - matches at least N occurences and at most M occurences of the preceding regular expression ( where M > N)

var regex = /go{1,2}d/;

console.log(regex.test('god'));
console.log(regex.test('good'));
console.log(regex.test('goood'));

// ALTERNATION X|Y - matches either X or Y

var regex = /(green|red) apple/;

console.log(regex.test('green apple'));
console.log(regex.test('red apple'));
console.log(regex.test('blue apple'));

// SPECIAL CHARACTERS - If you want to use any of them as part of the expression you have to escape them with a backslash ( \ ).

var regex = /a+b/;  // wont work 
var regex = /a\+b/; // THIS WORKS!

console.log(regex.test('a+b')); 

// ADVANCED
// (x) - matches and remembers the match. Called 'Capturing Groups'

var regex = /(foo)bar\1/;
// \1 rememebers and uses the match from the first subexpression within parentheses 
console.log(regex.test('foobarfoo'));
console.log(regex.test('foobar'));

// (?:x) - matches and 'does not' remember the match. Called 'NON Capturing Groups'

var regex = /(?:foo)bar\1/;

console.log(regex.test('foobarfoo'));
console.log(regex.test('foobar'));
console.log(regex.test('foobar\1'));

// x(?=y) - matches x only if x is followed by y. Called 'Positive look ahead'

var regex = /Red(?=Apple)/;

console.log(regex.test('RedApple'));

// PRACTICING REGEX

// Match any 10 digit number
var regex = /^\d{10}$/;

console.log(regex.test('9995484545'));
console.log(regex.test('9995484549'));
console.log(regex.test('999548454A'));
console.log(regex.test('999548454'));

// Match a date with the following format DD-MM-YYYY or DD-MM-YY

var regex = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;

console.log(regex.test('01-01-1990'));
console.log(regex.test('01-01-90'));
console.log(regex.test('01-01-190'));

// Matching anything but a newline

var regex = /^(.{3}\.){3}.{3}$/;

console.log(regex.test('123.456.abc.def'));
console.log(regex.test('1243.446.abc.def'));
console.log(regex.test('abc.def.ghi.jkl'));

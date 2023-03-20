# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @azizrahman/lotide`

**Require it:**

`const _ = require('@Friies/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are equals.
* `assertEqual`: asserts if two indexes are strictly equals.
* `assertObjectsEqual`: asserts if two objects equals.
* `countLetters`: counts the number of letters in a given string; ignores white-spaces.
* `countOnly`: takes in an array and returns counts for a specified element within the array.
* `eqArrays`: checks whether two arrays are equals.
* `eqObjects`: checks whether two objects are equals.
* `findKey`: scans the object and returns the key based on a specified callback function.
* `findKeyByValue`: scans for a given key on an object and returns the value for the key.
* `flatten`: function that flattens an array of arrays into a single-level array.
* `head`: returns the first element from an array.
* `index`: includes all the functions within an object.
* `letterPositions`: returns the indexes in the string where each character is found.
* `map`: returns an array with the results of calling a given function on every element in the calling array.
* `middle`: returns the middle element of an array; it returns two middle if the number of elements are even.
* `tail`: returns every element of an array except the first element.
* `takeUnil`: returns an array that includes elements up until a specified element.
* `without`: removes specified element and returns a new array.
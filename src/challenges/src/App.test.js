
import { isPalindromeFunc, reorderingArrays } from './ChallengeFunctions';


describe("Test isPalindrome function", () => {
  test("Test with palindrome, should pass", () => {
    let expectTrue = isPalindromeFunc('kayak');
    expect(expectTrue).toEqual(true);
  });
  test("Test with non-palindrome word, should fail", () => {
    let expectFalse = isPalindromeFunc('test');
    expect(expectFalse).toEqual(false);
  });
  test("Test with word including special characters, should fail", () => {
    let expectFalse = isPalindromeFunc('kay!ak');
    expect(expectFalse).toEqual(false);
  });
  test("Test with word including numbers, should fail", () => {
    let expectFalse = isPalindromeFunc('kay3ak');
    expect(expectFalse).toEqual(false);
  });
  test("Test with palindrome including trailing space, should pass", () => {
    let expectTrue = isPalindromeFunc('kayak ');
    expect(expectTrue).toEqual(true);
  });
});

describe("Test ordering arrays function", () => {
  const people = [
		{
			name: "Bob",
			age: 29
		},
		{
			name: "Alice",
			age: 42,
		},
		{
			name: "Greg",
			age: 23
		},
		{
			name: "Jean",
			age: 50
		}
	];
  test("Order by age descending, first result should be Jean aged 50", () => {
    let expectTrue = reorderingArrays('ageDesc');

    expect(expectTrue.length).toEqual(4);
    expect(typeof(expectTrue[0])).toEqual('object');
    expect(expectTrue[0].name).toEqual('Jean');
    expect(expectTrue[0].age).toEqual(50);

    expect(expectTrue[expectTrue.length - 1].name).toEqual('Greg');
    expect(expectTrue[expectTrue.length - 1].age).toEqual(23);
  });

  test("Order alphabetically, first result should be Alice", () => {
    let expectTrue = reorderingArrays('alphabetic');

    expect(expectTrue.length).toEqual(4);
    expect(typeof(expectTrue[0])).toEqual('object');
    expect(expectTrue[0].name).toEqual('Alice');

    expect(expectTrue[expectTrue.length - 1].name).toEqual('Jean');
  });

  test("Create array of ages, each element should be an int", () => {
    let expectTrue = reorderingArrays('agesArray');

    expect(expectTrue.length).toEqual(4);
    for(let i in expectTrue){
      expect(typeof(parseInt(i))).toEqual('number');
    }
  });
});
<h2><a href="https://leetcode.com/problems/check-if-object-instance-of-class/">2620. Check If Object Instance of Class</a></h2>
<img src="https://img.shields.io/badge/Difficulty-Medium-yellow" alt="Difficulty: Medium" />
<hr>

<p>Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.</p>

<p>There are no constraints on the data types that can be passed to the function. For example, the value or the class could be <code>undefined</code>.</p>

<h3>Example 1:</h3>
<pre>
<strong>Input:</strong> func = () => checkIfInstanceOf(new Date(), Date)
<strong>Output:</strong> true
<strong>Explanation:</strong> The object returned by the Date constructor is, by definition, an instance of Date.
</pre>

<h3>Example 2:</h3>
<pre>
<strong>Input:</strong> func = () => {
  class Animal {}
  class Dog extends Animal {}
  return checkIfInstanceOf(new Dog(), Animal);
}
<strong>Output:</strong> true
<strong>Explanation:</strong> Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
</pre>

<h3>Example 3:</h3>
<pre>
<strong>Input:</strong> func = () => checkIfInstanceOf(Date, Date)
<strong>Output:</strong> false
<strong>Explanation:</strong> A class constructor like Date is not an instance of itself.
</pre>

<h3>Example 4:</h3>
<pre>
<strong>Input:</strong> func = () => checkIfInstanceOf(5, Number)
<strong>Output:</strong> true
<strong>Explanation:</strong> 5 is a number and has access to Number's prototype methods like toFixed().
</pre>

<h3>Constraints:</h3>
<ul>
  <li><code>func</code> is a function with no parameters.</li>
  <li>The return value of <code>func</code> is a boolean representing the result of <code>checkIfInstanceOf</code>.</li>
</ul>

<h3>Solution:</h3>

```javascript
var checkIfInstanceOf = function(obj, classFunction) {
  if (obj == null || typeof classFunction !== 'function') return false;
  return obj instanceof classFunction || Object(obj) instanceof classFunction;
};

<h2><a href="https://leetcode.com/problems/array-prototype-last/description/">2619. Array Prototype Last</a></h2>
<img src="https://img.shields.io/badge/Difficulty-Easy-brightgreen" alt="Difficulty: Easy" />
<hr>

<p>Write code that enhances all arrays such that you can call the <code>array.last()</code> method on any array and it will return the last element. If there are no elements in the array, it should return <code>-1</code>.</p>

<p>You may assume the array is the output of <code>JSON.parse</code>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [null, {}, 3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Calling nums.last() should return the last element: 3.
</pre>
```javascript
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
```
<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = []
<strong>Output:</strong> -1
<strong>Explanation:</strong> Because there are no elements, return -1.
</pre>

<h3>Constraints:</h3>

<ul>
  <li><code>arr</code> is a valid JSON array</li>
</ul>

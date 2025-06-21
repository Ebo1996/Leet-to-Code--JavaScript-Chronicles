<h2><a href="https://leetcode.com/problems/counter/">2621. Counter</a></h2>
<img src="https://img.shields.io/badge/Difficulty-Easy-brightgreen" alt="Difficulty: Easy" />
<hr>

<p>Given an integer <code>n</code>, return a <strong>counter function</strong>. This counter function should return <code>n</code> the first time it is called, and then return 1 more than the previous return value on each subsequent call (<code>n, n + 1, n + 2, ...</code>).</p>

<h3>Example 1:</h3>
<pre>
<strong>Input:</strong> 
n = 10 
calls = ["call","call","call"]

<strong>Output:</strong> [10,11,12]

<strong>Explanation:</strong> 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<h3>Example 2:</h3>
<pre>
<strong>Input:</strong> 
n = -2
calls = ["call","call","call","call","call"]

<strong>Output:</strong> [-2,-1,0,1,2]

<strong>Explanation:</strong> 
counter() initially returns -2. Then increases after each subsequent call.
</pre>

<h3>Constraints:</h3>
<ul>
  <li><code>-1000 &lt;= n &lt;= 1000</code></li>
  <li><code>0 &lt;= calls.length &lt;= 1000</code></li>
  <li><code>calls[i] === "call"</code></li>
</ul>

<h3>Solution:</h3>

```javascript
var createCounter = function(n) {
  let count = n;
  return function() {
    return count++;
  };
};

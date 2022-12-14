<ul>
<li>
  <h3>Challenge 1</h3>

Create a function <code>addTwo</code> that accepts one input and adds 2 to it.

</li>

<li>
  <h3>Challenge 2</h3>

Create a function <code>addS</code> that accepts one input and adds an "s" to it.

</li>

<li>
  <h3>Challenge 3</h3>
  Create a function called <code>map</code> that takes two inputs:<br/>
  <ol>
    <li>an array of numbers (a list of numbers)</li>
    <li>a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')</li>
  </ol>

Have <code>map</code> return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.<br/>

  <!--
    map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
    multiplyByTwo(1); //-> 2
    multiplyByTwo(2); //-> 4
  -->
  <pre style='color:#000000;background:#ccc;'>map<span style='color:#808030; '>(</span><span style='color:#808030; '>[</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>2</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>3</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>,</span><span style='color:#008c00; '>5</span><span style='color:#808030; '>]</span><span style='color:#808030; '>,</span> multiplyByTwo<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//-> [2,4,6,8,10]</span><br>multiplyByTwo<span style='color:#808030; '>(</span><span style='color:#008c00; '>1</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//-> 2</span><br>multiplyByTwo<span style='color:#808030; '>(</span><span style='color:#008c00; '>2</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span> <span style='color:#696969; '>//-> 4</span>
  </pre>

</li>

<li>
  <h3>Challenge 4</h3>

Create a function called <code>forEach</code> that takes an array and a callback, and runs the callback on each element of the array. <code>forEach</code> does not return anything.

  <!--
    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];
    forEach(letters, function(char) {
      alphabet += char;
    });
    console.log(alphabet);   //prints 'abcd'
  -->
  <pre style='color:#000000;background:#ccc;'><span style='color:#800000; font-weight:bold; '>let</span> alphabet <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>const</span> letters <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>a</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>b</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>c</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>d</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
forEach<span style='color:#808030; '>(</span>letters<span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>char</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  alphabet <span style='color:#808030; '>+=</span> <span style='color:#800000; font-weight:bold; '>char</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>alphabet<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>   <span style='color:#696969; '>//prints 'abcd'</span>
</pre>

</li>

<li>
  <h3>Challenge 5</h3>

In challenge 3, you've created a function called <code>map</code>. In this challenge, you're going to rebuild the <code>map</code> function by creating a function called <code>mapWith</code>. This time you're going to use <code>forEach</code> inside of <code>mapWith</code> instead of using a <code>for</code> loop.

</li>

<li>
  <h3>Challenge 6</h3>

Create a function called <code>reduce</code> that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

  <!--
    const nums = [4, 1, 3];
    const add = function(a, b) { return a + b; }
    reduce(nums, add, 0);   //-> 8
  -->
  <pre style='color:#000000;background:#ccc;'><span style='color:#800000; font-weight:bold; '>const</span> nums <span style='color:#808030; '>=</span> <span style='color:#808030; '>[</span><span style='color:#008c00; '>4</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span> <span style='color:#008c00; '>3</span><span style='color:#808030; '>]</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>const</span> add <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>a<span style='color:#808030; '>,</span> b<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> a <span style='color:#808030; '>+</span> b<span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>
reduce<span style='color:#808030; '>(</span>nums<span style='color:#808030; '>,</span> add<span style='color:#808030; '>,</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>   <span style='color:#696969; '>//-> 8</span>
</pre>

Here's how it works. The function has an "accumulator value" which starts as the <code>initialValue</code> and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the <code>callback</code>. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. <code>add(0,4)</code> is called. The accumulator's value is now 4. Then <code>add(4, 1)</code> to make it 5. Finally <code>add(5, 3)</code> brings it to 8, which is returned.

</li>

<li>
  <h3>Challenge 7</h3>

Construct a function <code>intersection</code> that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!

  <!-- console.log(intersection([[5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
  should log: [15, 5] -->
</li>

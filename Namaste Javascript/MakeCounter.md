# Creating README.md content based on the formatted markdown above

readme_content = """
# Make Counter

## 🧠 Problem Overview

You are tasked with implementing a `makeCounter` function that returns an object with the following methods:

- **`increment()`** – Increases the counter by 1 and returns the new value.
- **`decrement()`** – Decreases the counter by 1 and returns the new value.
- **`reset()`** – Resets the counter to its initial value (default is 0) and returns the reset value.

### Requirements:

- The counter should maintain its current value internally without exposing it directly (i.e., encapsulation).
- It should accept an optional initial value, including negative numbers.
- Optionally, support method chaining for bonus points.

---

## 💡 Sample Usage

```javascript
const counter = makeCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4

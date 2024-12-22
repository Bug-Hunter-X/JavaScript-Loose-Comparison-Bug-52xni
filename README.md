# JavaScript Loose Comparison Bug

This repository demonstrates a common, yet easily overlooked, bug in JavaScript stemming from the use of loose comparison (==) instead of strict comparison (===).

Loose comparison does type coercion, which can lead to unexpected results when comparing values of different types. The bug.js file showcases this behavior, while bugSolution.js provides the corrected version using strict comparison.

## Bug
The function `foo` uses loose comparison to check if the variable `a` is equal to 1. Due to type coercion, it returns `true` even when `a` is not strictly equal to 1 (e.g. string "1", boolean true, empty array [], empty object {}).

## Solution
The solution is to use the strict equality operator (===), which does not perform type coercion. This ensures that the comparison is accurate and prevents unexpected behavior.
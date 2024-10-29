"use strict"
const scores = [98, 85, 91, 78, 87, 96, 72];

// 1. Destructure the first three scores as `top1`, `top2`, and `top3`.
const [top1, top2, top3, ...otherScores] = scores;

// 2. `otherScores` will collect the rest of the scores in an array.

// 3. Log the top scores and the rest of the scores separately.
console.log("Top scores:", top1, top2, top3);
console.log("Other scores:", otherScores);
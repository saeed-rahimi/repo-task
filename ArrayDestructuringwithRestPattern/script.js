"use strict"
const scores = [98, 85, 91, 78, 87, 96, 72];



const [top1, top2, top3, ...otherScores] = scores;

console.log("Top scores:", top1, top2, top3);
console.log("Other scores:", otherScores);
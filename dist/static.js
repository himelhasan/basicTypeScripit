"use strict";
class Score {
    constructor(counter) {
        Score.counter = counter;
    }
    static add() {
        return (Score.counter = Score.counter + 1);
    }
    static minus() {
        return (Score.counter = Score.counter - 1);
    }
}
Score.counter = 0;
console.log(Score.add());
console.log(Score.add());

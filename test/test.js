import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("calculateStarAverage", () => {
  it("should return the correct average for reviews with ratings", () => {
    const reviews = [{ star: 4 }, { star: 5 }, { star: 3 }];
    const result = calculateStarAverage(reviews);
    assert.strictEqual(result, 4);
  });

  it("should return NaN if the array is empty", () => {
    const reviews = [];
    const result = calculateStarAverage(reviews);
    assert.isNaN(result);
  });

  it("should handle a single review correctly", () => {
    const reviews = [{ star: 5 }];
    const result = calculateStarAverage(reviews);
    assert.strictEqual(result, 5);
  });

  it("should correctly handle decimal averages", () => {
    const reviews = [{ star: 3 }, { star: 4 }, { star: 5 }];
    const result = calculateStarAverage(reviews);
    assert.strictEqual(result, 4);
  });
});

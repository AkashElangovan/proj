# MERN Flash Card App with SM2 Algorithm

## Overview

This MERN (MongoDB, Express.js, React.js, Node.js) web application is a simple flash card app that utilizes the SM2 algorithm for spaced repetition. The SM2 algorithm is a widely used algorithm for optimizing the timing of reviewing flashcards, ensuring efficient and effective learning.

## Features

- **Flash Card Creation**: Users can create flash cards with questions and answers.
- **SM2 Algorithm**: The app implements the SM2 algorithm for spaced repetition to optimize the timing of flash card reviews.

## Technologies Used

- **MongoDB**: NoSQL database for storing flash cards and user data.
- **Express.js**: Backend framework for handling server-side logic.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
## SM2 Algorithm
The SM2 algorithm is a spaced repetition algorithm that determines the optimal intervals for reviewing flash cards based on the user's performance. It uses a formula to calculate the next review date for each flash card, ensuring that cards are reviewed at increasing intervals as the user demonstrates proficiency.

## Spaced Repetition
Spaced repetition is a learning technique that involves reviewing information at increasing intervals over time. This method is proven to enhance long-term retention and is implemented in this app through the SM2 algorithm. The algorithm adjusts the review intervals based on the user's accuracy, ensuring that cards are revisited at the optimal time for effective learning.
# SM-2 Algorithm Summary

## Inputs
1. **Quality (0-5):** Memory recall difficulty.
2. **Repetitions:** Number of prior reviews.
3. **Previous Ease Factor:** Floating-point factor (≥ 1.3).
4. **Previous Interval:** Days between previous reviews.

## Outputs
1. **Interval:** Days until the next review.
2. **Repetitions:** Number of reviews.
3. **Ease Factor:** Adjusted for recall quality.

## Steps
1. **If quality ≥ 3:**
   - Set interval based on repetitions.
   - Increment repetitions.
   - Adjust ease factor.

2. **If quality < 3:**
   - Reset repetitions and interval.
   - Maintain ease factor.

3. **Ensure ease factor ≥ 1.3.**

4. **Return interval, repetitions, and ease factor.**

## Ease Factor Formula
```plaintext
previous ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

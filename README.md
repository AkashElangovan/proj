#  Flash Card App with SM2 Algorithm
### LINK
https://akashelangovan.github.io/flashcard-webapp/

<div align="center">

# Flashcard Web App with SM2 Algorithm

[![GitHub Badge](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/AkashElangovan/flashcard-webapp)
[![License Badge](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/AkashElangovan/flashcard-webapp/blob/main/LICENSE)
</div>

<br>

This repository contains a simple web application for creating and reviewing flashcards using the SM2 spaced repetition algorithm. The app is designed to help users learn more efficiently by optimizing review times based on their performance.

## Features

-   **Flashcard Creation**: Easily add new flashcards with questions and answers.
-   **Spaced Repetition**: Utilizes the SM2 algorithm to schedule flashcard reviews at optimal intervals.
-   **Performance Tracking**: Tracks ease factor, repetitions, interval, and next review date for each card.
-   **User-Friendly Interface**: Clean and intuitive design using HTML, CSS, and JavaScript.
-   **Local Storage**: Saves all card data in the browser's local storage.

## Table of Contents

1.  [Installation](#installation)
2.  [How to Run](#how-to-run)
3.  [Dependencies](#dependencies)
4.  [Contribution](#contribution)
5.  [License](#license)
6.  [Contact](#contact)

## Installation

To set up the flashcard app, clone this repository to your local machine:

```bash
git clone https://github.com/AkashElangovan/flashcard-webapp.git
cd flashcard-webapp
```

## How to Run

Open the `index.html` file directly in your web browser. No server is required as the app is client-side and uses local storage.

## Dependencies

The project relies on the following dependencies:

*   **HTML**: Used for structuring the web page.
*   **CSS**: Styling the user interface with basic styles.
*   **JavaScript**: Logic for the flashcard application and the SM2 algorithm.
*   **Tailwind CSS**: Used for basic styling and layouts (loaded via CDN).
*   **Local Storage**: Used to save flashcards and card data in the browser.

## Contribution

Contributions are welcome! To contribute to this project:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Create a pull request to the main repository.

Please ensure your code adheres to the project's coding conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact:

*   **Maintainer**: Akash Elangovan
*   **Email**: [placeholder@email.com](mailto:placeholder@email.com)


4. **Return interval, repetitions, and ease factor.**

## Ease Factor Formula
```plaintext
previous ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

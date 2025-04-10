# React 20 Challenges – Progress Log

This is a breakdown of the completed projects and core functionalities in the React 20 challenge series. Each app is built using **React**, **TypeScript**, and **Tailwind CSS**, with routing handled by **React Router**.

---

## ✅ Quote Generator

### Summary:
A responsive quote viewer that allows users to explore quotes from different authors and tags, powered by the Quotable API.

### Features:
- Fetches random quotes from an external API.
- Allows filtering by **author** and **tag**.
- Dynamically updates tag list based on the current author input.
- Graceful error handling with fallback messaging.
- Clean, accessible UI with full Tailwind styling.
- Loads a new random quote on button click or page load.

---

## ✅ Calculator

### Summary:
A modern, interactive calculator with keyboard support, proper input validation, and live expression evaluation.

### Features:
- 4x5 calculator grid using a declarative button spec.
- Supports basic math operations, decimal input, and clearing.
- Prevents invalid input sequences like duplicate operators or misplaced decimals.
- Keyboard-enabled: works with number keys, operators, Enter, and Backspace.
- Scrollable display handles long expressions neatly.
- Live expression evaluation using a utility function.

---

## ✅ Roll a Dice (The Dash)

### Summary:
A fun and dynamic dice rolling simulator that mimics the behavior of physical dice using animations and emoji faces.

### Features:
- Two dice rendered with accurate emoji faces (`⚀` to `⚅`).
- Dice state is handled through a structured model for value + face.
- Rolling simulates real dice behavior with rapid face changes before settling.
- Smooth 30° shake animation during roll for added realism.
- Displays the combined total of the two dice.
- Fully routed and accessible via the Home screen.

---

## 🔗 Navigation

The Home page includes direct navigation buttons to:
- 💭 Quote Generator
- 🔢 Calculator
- 🎲 Roll Dice

Each app is fully responsive and functions independently within its own route.

   # ✅ React 20 Challenge – Completed Projects
   This section documents the apps completed so far in the React 20 Challenge. Each project is built using React, TypeScript, and Tailwind CSS, and showcases declarative design, modular structure, and state-driven UIs.

   ## 🔗 Navigation
   The Home page provides quick access to:
   - 💭 [Quote Generator](#quote-generator-)
   - 🔢 [Calculator](#calculator-)
   - 🎲 [Roll a Dice (The Dash)](#roll-a-dice-the-dash-)
   - 🔴🟡 [Connect Four](#connect-four-)
   - 💰 [Expense Tracker](#expense-tracker-)
   - 🎨 [Gradient Generator](#gradient-generator-)
   - 🎯 [Hangman](#hangman-)


   ---

   ## ✅ Quote Generator 💭
   **Summary**  
   A responsive quote viewer powered by the Quotable API. Users can explore quotes dynamically by author and tag, with smooth filtering and error feedback.

   **Features**  
   - 🧠 Fetches random quotes from an external API with live updates  
   - 🏷️ Tag filtering and author search with auto-refined tag lists  
   - ⚠️ Graceful error handling with CORS/network awareness  
   - 🔁 Supports manual quote refresh and initial auto-fetch  

   ---

   ## ✅ Calculator 🔢
   **Summary**  
   A modern calculator with keyboard support, input validation, and real-time expression evaluation.

   **Features**  
   - 🔲 4x5 responsive button grid built from a declarative layout config  
   - 🧮 Validates input to prevent double operators, malformed decimals, etc.  
   - ⌨️ Full keyboard support (Enter, Backspace, arrow keys, etc.)  
   - 🔢 Handles large expressions with a scrollable display  

   ---

   ## ✅ Roll a Dice 🎲 (The Dash)
   **Summary**  
   A fun dice roller simulator that mimics physical dice behavior with animated shake and emoji faces.

   **Features**  
   - 🎲 Two dice with realistic emoji faces (⚀ to ⚅)  
   - 🌀 30° shake animation with rapid face switching during roll  
   - 🔢 Displays the total roll result after each throw  
   - 🕹️ Simple, responsive layout — works well on any screen size  

   ---

   ## ✅ Connect Four 🔴🟡
   **Summary**  
   A full-featured Connect Four game with animated drops, real-time win detection, and immersive 3D-style visuals.

   **Features**  
   - 🟡🔴 Interactive 6x7 grid with accurate column-based drop logic  
   - ⚙️ Falling animation with timed win detection after drop completes  
   - 🔎 Four-direction win detection (horizontal, vertical, diagonal)  
   - 💡 3D-effect discs using radial gradients and colored shadows  
   - 🏆 Winning discs highlighted visually + winner message  
   - 🔐 Input locked during animation to prevent rapid double-moves  
   - 🔄 Full board reset and turn reinitialization on game end  
   - ✅ Proper state separation: game logic in parent, rendering in child  

   ---

   ## ✅ Expense Tracker 💰
   **Summary**  
   A budget and expense management app where users can set a budget, add expenses, and view the remaining balance dynamically. Includes filtering by date, category, amount, and description.

   **Features**  
   - 💰 Set a budget with real-time balance calculation  
   - ✏️ Add expenses with detailed descriptions and categories  
   - 🔎 Inline filtering for quick search by date, category, amount, and description  
   - 📊 Visual balance bar that adjusts dynamically  
   - 💸 Displays total expenses and remaining balance visually  

   ---

   ## ✅ Gradient Generator 🎨
   **Summary**  
   An interactive gradient generator that allows users to create and customize linear or radial gradients. The generated CSS can be copied directly for use in any project.
   

   **Features**  
   - 🎨 Real-time gradient preview with live color adjustments  
   - 🔄 Supports linear and radial gradient types  
   - 🔢 Adjustable angle control for linear gradients  
   - ➕ Add and remove color stops dynamically  
   - 🗑️ Prevents removal of colors if only two remain  
   - ✏️ Editable color and position values  
   - 📋 One-click CSS copy with formatted code for easy integration  

   ---

## ✅ Hangman 🎯
   **Summary**  
   A classic word-guessing game where players attempt to uncover a hidden word by selecting letters one at a time. Words are randomly drawn from predefined categories such as animals, fruits, colors, verbs, and countries.

   **Features**  
   - 🔤 Random word selection from categorized local JSON data  
   - ⌨️ Interactive on-screen keyboard with disabled guessed letters  
   - ❌ Incorrect guesses trigger a visual Hangman drawing (6-step scaffold)  
   - ✅ Correct guesses revealed in-place within the hidden word  
   - 🧠 Real-time win/loss detection based on guesses  
   - 🔄 Planned additions: reset button, category selector, hint system  


   ## 🚀 Installation & Usage

   ```sh
      npm install
      npm run dev

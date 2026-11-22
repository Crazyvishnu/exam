# Flutter Lab Exam

8 Flutter lab questions (each with part A and part B — 16 programs in total),
with the Dart / Flutter code and the expected output for each one.

## View the site

Live site (GitHub Pages): **https://crazyvishnu.github.io/exam/**

Or open `index.html` in any browser — no build step needed.

## Layout

The site looks like DartPad (dark editor, Run button, code on top):

1. **Code** — the answer program, with Dart syntax highlighting and a
   **Copy code** button (top bar, next to Run) plus a Copy button on each
   file tab. For Question 8B there are two files (`main.dart` and
   `widget_test.dart`); the top Copy button copies both files.
2. **Output** — the expected output preview for that program.
   The **Run** button scrolls to it.
3. **Question** — the question text sits at the bottom, so you only see it
   after scrolling down.
4. **Bottom navigation** — tap a number (1A, 1B, 2A … 8B) at the very bottom
   to switch questions.

## Files

- `index.html`, `styles.css`, `app.js` — the site (static, no framework)
- `images/` — 16 expected-output previews (SVG)
- `code/` — the Dart source files for all 16 answers

## Note on outputs

No Dart/Flutter SDK was used to produce these: the output images are
**expected-output previews** drawn from tracing each program
(console output for Q1A / Q2A / Q3A, phone mockups for the Flutter UIs).
They are labelled “Expected output” on the site. Run the code in DartPad
or Android Studio to see the real output.

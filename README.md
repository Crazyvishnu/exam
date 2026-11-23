# Flutter Lab Exam

8 Flutter lab questions (each with part A and part B — 16 programs in total),
with the Dart / Flutter code and the expected output for each one.

## View the site

Live site (GitHub Pages): **https://crazyvishnu.github.io/exam/**

Or open `index.html` in any browser — no build step needed.

## Questions

**1. A.** Write and execute a Dart program to demonstrate: (I) Variables and constants (var, const, final) (II) Data types (III) String interpolation

**1. B.** Develop a responsive Flutter application for a student profile screen using appropriate layout widgets and customize the application using MediaQuery and breakpoints to adapt the UI for mobile and tablet screen sizes.

**2. A.** Write and execute a Dart program to demonstrate: (I) Lists, Maps and Sets (II) If-else and switch statements (III) For and while loops

**2. B.** Create an Online Shopping App with three screens: Home, Product Details and Cart. Design the Home screen to display a list of products with suitable images, names and prices.

**3. A.** Write and execute a Dart program to demonstrate: (I) Null safety (II) Functions with positional, optional and named parameters (III) Variables and constants (var, const, final)

**3. B.** Create reusable custom widgets for a product card or student information card in a Flutter application and customise the application by applying ThemeData, different colour schemes, text styles and widget-level styling.

**4. A.** Create a Flutter application using Text, Image, Container, Center, AppBar and Scaffold widgets. Display suitable content and apply basic styling to the widgets.

**4. B.** Design and develop a student registration form using suitable input fields such as Name, Email, Mobile Number and Password and implement form validation and customize error messages to handle invalid inputs and display appropriate feedback upon successful submission.

**5. A.** Develop a Flutter application to demonstrate different layout structures using Row widgets and Column widgets. Arrange multiple UI elements meaningfully on the screen.

**5. B.** Develop a Flutter application that demonstrates animations on UI elements using Flutter's animation framework. Explain the animations frameworks you are going to apply along with figures. Customize the application by implementing at least two animation effects, such as Fade, Slide, and analyse their impact on the user interface.

**6. A.** Develop a Flutter application to demonstrate different layout structures using Stack widgets and Combined Layout – Row + Column + Stack widgets. Arrange multiple UI elements meaningfully on the screen.

**6. B.** Develop a Flutter application that demonstrates animations on UI elements using Flutter's animation framework. Explain the animations frameworks you are going to apply along with figures. Customize the application by implementing at least two animation effects, such as Scale, Rotation and analyse their impact on the user interface.

**7. A.** Develop a Flutter counter application using StatefulWidget and setState(). Provide buttons to increment and decrement the counter and display the updated value.

**7. B.** Develop a Flutter application that fetches data from a REST API using an HTTP GET request and displays the retrieved data dynamically on the user interface. The application should handle the API response and display appropriate information to the user.

**8. A.** Develop a Flutter counter application using StatefulWidget and Provider(). Provide buttons to increment and decrement the counter and display the updated value.

**8. B.** Develop a Flutter application and write a test to verify that a UI component displays the expected text, and use debugging statements such as print() or debugPrint() to identify and handle an error during execution.

The same questions are also shown at the bottom of each question page on the site — tap the **❓ Question** button in the top bar to jump straight to it.

## Layout

The site looks like DartPad (dark workspace, explorer, Run button, code on top):

1. **Project explorer** — shows the `lib` source file, the `test` folder for multi-file questions, plus `README.md` (tap it to open all 8 questions in the repo README) and `pubspec.yaml`.
2. **Code** — the answer program, with Dart syntax highlighting and a **Copy code** button (top bar, next to Run) plus a Copy button on each file tab. For Question 8B there are two files (`main.dart` and `widget_test.dart`); the top Copy button copies both files.
3. **Preview** — the expected output preview for that program. The **Run** button scrolls to it.
4. **Question** — the question text sits in the **QUESTION DETAILS** drawer under the code, open by default so you can see it right away. Tap the **❓ Question** button in the top bar to jump straight to it, or the arrow in the drawer heading to fold it away.
5. **Bottom navigation** — tap a number (1A, 1B, 2A … 8B) at the very bottom to switch questions.

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

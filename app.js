/* Flutter Lab Exam — DartPad-style viewer. No build step, no CDN. */
var QUESTIONS = [
 {
  "id": "1A",
  "title": "Variables, constants, data types & string interpolation",
  "question": "A. Write and execute a Dart program to demonstrate: (I) Variables and constants (var, const, final)  (II) Data types  (III) String interpolation",
  "files": [
   {
    "name": "main.dart",
    "code": "void main() {\n  // Variables and constants\n  var name = \"Vishnu\";\n  final age = 20;\n  const college = \"MGIT\";\n\n  // Data types\n  int rollNo = 101;\n  double percentage = 85.5;\n  String branch = \"CSE\";\n  bool isStudent = true;\n\n  // String interpolation\n  print(\"Student Details\");\n  print(\"Name: $name\");\n  print(\"Age: $age\");\n  print(\"College: $college\");\n  print(\"Roll Number: $rollNo\");\n  print(\"Percentage: $percentage\");\n  print(\"Branch: $branch\");\n  print(\"Is Student: $isStudent\");\n}\n"
   }
  ],
  "image": "q1a-output.svg",
  "note": null
 },
 {
  "id": "1B",
  "title": "Responsive student profile screen",
  "question": "B. Develop a responsive Flutter application for a student profile screen using appropriate layout widgets and customize the application using MediaQuery and breakpoints to adapt the UI for mobile and tablet screen sizes.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const MaterialApp(\n      debugShowCheckedModeBanner: false,\n      home: StudentProfile(),\n    );\n  }\n}\n\nclass StudentProfile extends StatelessWidget {\n  const StudentProfile({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    double width = MediaQuery.of(context).size.width;\n\n    bool isMobile = width < 600;\n\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\"Student Profile\"),\n        backgroundColor: Colors.blue,\n      ),\n      body: Center(\n        child: isMobile\n            ? Column(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: const [\n                  CircleAvatar(\n                    radius: 50,\n                    child: Icon(Icons.person, size: 50),\n                  ),\n                  SizedBox(height: 20),\n                  Text(\"Student Name\"),\n                  Text(\"CSE\"),\n                  Text(\"525\"),\n                ],\n              )\n            : Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: const [\n                  CircleAvatar(\n                    radius: 50,\n                    child: Icon(Icons.person, size: 50),\n                  ),\n                  SizedBox(width: 20),\n                  Text(\"Student Name\"),\n                  Text(\"CSE\"),\n                  Text(\"525\"),\n                ],\n              ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q1b-output.svg",
  "note": null
 },
 {
  "id": "2A",
  "title": "Lists, Maps, Sets, if-else, switch & loops",
  "question": "A. Write and execute a Dart program to demonstrate: (I) Lists, Maps and Sets  (II) If-else and switch statements  (III) For and while loops",
  "files": [
   {
    "name": "main.dart",
    "code": "void main() {\n  // List\n  List<int> marks = [80, 90, 75];\n  print(\"List: $marks\");\n\n  // Map\n  Map<String, int> student = {\"Age\": 20, \"Marks\": 90};\n  print(\"Map: $student\");\n\n  // Set\n  Set<int> numbers = {10, 20, 30, 10};\n  print(\"Set: $numbers\");\n\n  // If-else\n  int age = 20;\n  if (age >= 18)\n    print(\"Eligible\");\n  else\n    print(\"Not Eligible\");\n\n  // Switch\n  int day = 1;\n  switch (day) {\n    case 1:\n      print(\"Monday\");\n      break;\n    default:\n      print(\"Invalid Day\");\n  }\n\n  // For loop\n  for (int i = 1; i <= 5; i++) {\n    print(i);\n  }\n\n  // While loop\n  int j = 1;\n  while (j <= 5) {\n    print(j);\n    j++;\n  }\n}\n"
   }
  ],
  "image": "q2a-output.svg",
  "note": null
 },
 {
  "id": "2B",
  "title": "Online Shopping App — Home, Details & Cart",
  "question": "B. Create an Online Shopping App with three screens: Home, Product Details and Cart. Design the Home screen to display a list of products with suitable images, names and prices.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: Shop()));\n\nclass Shop extends StatefulWidget {\n  const Shop({super.key});\n\n  @override\n  State<Shop> createState() => _ShopState();\n}\n\nclass _ShopState extends State<Shop> {\n  int page = 0;\n  int selected = 0;\n  List cart = [];\n\n  List products = [\n    ['Shoes', 1000],\n    ['Watch', 2000],\n  ];\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"Shopping App\")),\n      body: page == 0\n          ? Column(children: [\n              for (int i = 0; i < products.length; i++)\n                ListTile(\n                  leading: const Icon(Icons.shopping_bag),\n                  title: Text(products[i][0]),\n                  subtitle: Text(\"₹${products[i][1]}\"),\n                  onTap: () => setState(() {\n                    selected = i;\n                    page = 1;\n                  }),\n                ),\n            ])\n          : page == 1\n              ? Column(children: [\n                  Text(products[selected][0]),\n                  Text(\"₹${products[selected][1]}\"),\n                  ElevatedButton(\n                    onPressed: () => setState(() {\n                      cart.add(products[selected]);\n                      page = 2;\n                    }),\n                    child: const Text(\"Add to Cart\"),\n                  ),\n                ])\n              : Column(children: [\n                  const Text(\"My Cart\"),\n                  for (var p in cart)\n                    Text(\"${p[0]} - ₹${p[1]}\"),\n                ]),\n      bottomNavigationBar: Row(\n        mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n        children: [\n          TextButton(\n            onPressed: () => setState(() => page = 0),\n            child: const Text(\"Home\"),\n          ),\n          TextButton(\n            onPressed: () => setState(() => page = 2),\n            child: const Text(\"Cart\"),\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q2b-output.svg",
  "note": null
 },
 {
  "id": "3A",
  "title": "Null safety & functions (positional, optional, named)",
  "question": "A. Write and execute a Dart program to demonstrate: (I) Null safety  (II) Functions with positional, optional and named parameters  (III) Variables and constants (var, const, final)",
  "files": [
   {
    "name": "main.dart",
    "code": "void main() {\n  // Variables and constants\n  var name = \"Vishnu\";\n  final age = 20;\n  const college = \"MGIT\";\n\n  // Null Safety\n  String? city;\n  print(city);\n\n  // Positional parameter\n  add(int a, int b) {\n    print(a + b);\n  }\n  add(10, 20);\n\n  // Optional parameter\n  greet(String name, [String city = \"Hyderabad\"]) {\n    print(\"$name $city\");\n  }\n  greet(\"Vishnu\");\n\n  // Named parameter\n  details({required String name, required int age}) {\n    print(\"$name $age\");\n  }\n  details(name: name, age: age);\n\n  print(age);\n  print(college);\n}\n"
   }
  ],
  "image": "q3a-output.svg",
  "note": null
 },
 {
  "id": "3B",
  "title": "Reusable custom widgets & ThemeData",
  "question": "B. Create reusable custom widgets for a product card or student information card in a Flutter application and customise the application by applying ThemeData, different colour schemes, text styles and widget-level styling.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(MaterialApp(\n  theme: ThemeData(\n    colorSchemeSeed: Colors.blue,\n    useMaterial3: true,\n  ),\n  home: const Home(),\n));\n\nclass Home extends StatelessWidget {\n  const Home({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"Student Cards\")),\n      body: Column(\n        children: const [\n          StudentCard(name: \"Vishnu\", branch: \"CSE\"),\n          StudentCard(name: \"Rahul\", branch: \"IT\"),\n        ],\n      ),\n    );\n  }\n}\n\nclass StudentCard extends StatelessWidget {\n  final String name, branch;\n\n  const StudentCard({\n    super.key,\n    required this.name,\n    required this.branch,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      color: Colors.blue.shade100,\n      child: ListTile(\n        leading: const Icon(Icons.person),\n        title: Text(name,\n          style: const TextStyle(\n            fontSize: 20,\n            fontWeight: FontWeight.bold,\n          )),\n        subtitle: Text(branch),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q3b-output.svg",
  "note": null
 },
 {
  "id": "4A",
  "title": "Text, Image, Container, Center, AppBar & Scaffold",
  "question": "A. Create a Flutter application using Text, Image, Container, Center, AppBar and Scaffold widgets. Display suitable content and apply basic styling to the widgets.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: MyApp()));\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"My App\")),\n      body: Center(\n        child: Container(\n          padding: const EdgeInsets.all(20),\n          color: Colors.blue.shade100,\n          child: Column(\n            mainAxisSize: MainAxisSize.min,\n            children: [\n              const Text(\"Welcome to Flutter\",\n                  style: TextStyle(fontSize: 22)),\n              Image.network(\n                \"https://picsum.photos/150\",\n                height: 100,\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q4a-output.svg",
  "note": null
 },
 {
  "id": "4B",
  "title": "Student registration form with validation",
  "question": "B. Design and develop a student registration form using suitable input fields such as Name, Email, Mobile Number and Password and implement form validation and customize error messages to handle invalid inputs and display appropriate feedback upon successful submission.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: Register()));\n\nclass Register extends StatelessWidget {\n  const Register({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    final key = GlobalKey<FormState>();\n\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"Registration\")),\n      body: Padding(\n        padding: const EdgeInsets.all(20),\n        child: Form(\n          key: key,\n          child: Column(\n            children: [\n              TextFormField(\n                decoration: const InputDecoration(labelText: \"Name\"),\n                validator: (v) => v!.isEmpty ? \"Enter Name\" : null,\n              ),\n              TextFormField(\n                decoration: const InputDecoration(labelText: \"Email\"),\n                validator: (v) =>\n                    v!.contains(\"@\") ? null : \"Enter valid Email\",\n              ),\n              TextFormField(\n                decoration: const InputDecoration(labelText: \"Mobile\"),\n                keyboardType: TextInputType.phone,\n                validator: (v) =>\n                    v!.length == 10 ? null : \"Enter 10 digits\",\n              ),\n              TextFormField(\n                obscureText: true,\n                decoration: const InputDecoration(labelText: \"Password\"),\n                validator: (v) =>\n                    v!.length >= 6 ? null : \"Minimum 6 characters\",\n              ),\n              ElevatedButton(\n                onPressed: () {\n                  if (key.currentState!.validate()) {\n                    ScaffoldMessenger.of(context).showSnackBar(\n                      const SnackBar(content: Text(\"Registration Successful\")),\n                    );\n                  }\n                },\n                child: const Text(\"Register\"),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q4b-output.svg",
  "note": null
 },
 {
  "id": "5A",
  "title": "Row & Column layouts",
  "question": "A. Develop a Flutter application to demonstrate different layout structures using Row widgets and Column widgets. Arrange multiple UI elements meaningfully on the screen.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: MyApp()));\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"Row and Column\")),\n      body: Column(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          const Text(\"ROW LAYOUT\"),\n          Row(\n            mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n            children: const [\n              Icon(Icons.home, size: 40),\n              Icon(Icons.person, size: 40),\n              Icon(Icons.settings, size: 40),\n            ],\n          ),\n          const SizedBox(height: 40),\n          const Text(\"COLUMN LAYOUT\"),\n          Column(\n            children: const [\n              Icon(Icons.home, size: 40),\n              Icon(Icons.person, size: 40),\n              Icon(Icons.settings, size: 40),\n            ],\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q5a-output.svg",
  "note": null
 },
 {
  "id": "5B",
  "title": "Animations — Fade & Slide",
  "question": "B. Develop a Flutter application that demonstrates animations on UI elements using Flutter's animation framework. Explain the animations frameworks you are going to apply along with figures. Customize the application by implementing at least two animation effects, such as Fade, Slide, and analyse their impact on the user interface.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(home: MyApp()));\n\nclass MyApp extends StatefulWidget {\n  const MyApp({super.key});\n\n  @override\n  State<MyApp> createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n  bool show = true;\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text(\"Animations\")),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            AnimatedOpacity(\n              opacity: show ? 1 : 0,\n              duration: const Duration(seconds: 1),\n              child: const Text(\"Fade Animation\",\n                  style: TextStyle(fontSize: 25)),\n            ),\n            AnimatedSlide(\n              offset: show ? Offset.zero : const Offset(2, 0),\n              duration: const Duration(seconds: 1),\n              child: const Icon(Icons.star, size: 60),\n            ),\n            ElevatedButton(\n              onPressed: () => setState(() => show = !show),\n              child: const Text(\"Animate\"),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q5b-output.svg",
  "note": null
 },
 {
  "id": "6A",
  "title": "Stack & combined Row + Column + Stack layout",
  "question": "A. Develop a Flutter application to demonstrate different layout structures using Stack widgets and Combined Layout – Row + Column + Stack widgets. Arrange multiple UI elements meaningfully on the screen.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(\n  home: MyApp(),\n));\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Combined Layout')),\n      body: Column(\n        children: [\n          Stack(\n            children: [\n              Image.network(\n                'https://picsum.photos/400/200',\n                width: double.infinity,\n                height: 200,\n                fit: BoxFit.cover,\n              ),\n              const Positioned(\n                bottom: 10,\n                left: 10,\n                child: Text(\n                  'MGIT',\n                  style: TextStyle(\n                    color: Colors.white,\n                    fontSize: 24,\n                  ),\n                ),\n              ),\n            ],\n          ),\n\n          const SizedBox(height: 20),\n\n          const Column(\n            children: [\n              Text('Welcome to MGIT'),\n              Text('UI Design using Flutter'),\n            ],\n          ),\n\n          const SizedBox(height: 20),\n\n          Row(\n            mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n            children: [\n              const Icon(Icons.home),\n              const Icon(Icons.school),\n              ElevatedButton(\n                onPressed: () {},\n                child: const Text('Start'),\n              ),\n            ],\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q6a-output.svg",
  "note": null
 },
 {
  "id": "6B",
  "title": "Animations — Scale & Rotation",
  "question": "B. Develop a Flutter application that demonstrates animations on UI elements using Flutter's animation framework. Explain the animations frameworks you are going to apply along with figures. Customize the application by implementing at least two animation effects, such as Scale, Rotation and analyse their impact on the user interface.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(MaterialApp(\n  home: Scaffold(\n    appBar: AppBar(title: Text('Scale & Rotation')),\n    body: MyAnimation(),\n  ),\n));\n\nclass MyAnimation extends StatefulWidget {\n  @override\n  State<MyAnimation> createState() => _MyAnimationState();\n}\n\nclass _MyAnimationState extends State<MyAnimation>\n    with SingleTickerProviderStateMixin {\n\n  late AnimationController controller;\n  late Animation<double> animation;\n\n  @override\n  void initState() {\n    super.initState();\n\n    controller = AnimationController(\n      vsync: this,\n      duration: Duration(seconds: 2),\n    );\n\n    animation = Tween<double>(\n      begin: 0.0,\n      end: 1.0,\n    ).animate(controller);\n\n    controller.forward();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Center(\n      child: ScaleTransition(\n        scale: animation,\n        child: RotationTransition(\n          turns: animation,\n          child: Container(\n            width: 200,\n            height: 200,\n            color: Colors.blue,\n            child: Icon(Icons.star, size: 80),\n          ),\n        ),\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    controller.dispose();\n    super.dispose();\n  }\n}\n"
   }
  ],
  "image": "q6b-output.svg",
  "note": null
 },
 {
  "id": "7A",
  "title": "Counter app — StatefulWidget & setState()",
  "question": "A. Develop a Flutter counter application using StatefulWidget and setState(). Provide buttons to increment and decrement the counter and display the updated value.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() => runApp(MaterialApp(home: CounterApp()));\n\nclass CounterApp extends StatefulWidget {\n  @override\n  State<CounterApp> createState() => _CounterAppState();\n}\n\nclass _CounterAppState extends State<CounterApp> {\n  int count = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text('Counter App')),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            Text('Count: $count', style: TextStyle(fontSize: 30)),\n            ElevatedButton(\n              onPressed: () {\n                setState(() {\n                  count++;\n                });\n              },\n              child: Text('Increase'),\n            ),\n            ElevatedButton(\n              onPressed: () {\n                setState(() {\n                  count--;\n                });\n              },\n              child: Text('Decrease'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q7a-output.svg",
  "note": null
 },
 {
  "id": "7B",
  "title": "Fetch data from a REST API (HTTP GET)",
  "question": "B. Develop a Flutter application that fetches data from a REST API using an HTTP GET request and displays the retrieved data dynamically on the user interface. The application should handle the API response and display appropriate information to the user.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\nimport 'package:http/http.dart' as http;\nimport 'dart:convert';\n\nvoid main() => runApp(MaterialApp(home: ApiApp()));\n\nclass ApiApp extends StatefulWidget {\n  @override\n  State<ApiApp> createState() => _ApiAppState();\n}\n\nclass _ApiAppState extends State<ApiApp> {\n  String data = \"Loading...\";\n\n  void getData() async {\n    var url = Uri.parse('https://jsonplaceholder.typicode.com/users/1');\n    var response = await http.get(url);\n\n    var result = jsonDecode(response.body);\n\n    setState(() {\n      data = result['name'];\n    });\n  }\n\n  @override\n  void initState() {\n    super.initState();\n    getData();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text('API Data')),\n      body: Center(\n        child: Text(data, style: TextStyle(fontSize: 25)),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q7b-output.svg",
  "note": "Add http: ^1.2.0 under dependencies in pubspec.yaml. The API used is https://jsonplaceholder.typicode.com/users/1 — its real returned name is “Leanne Graham”."
 },
 {
  "id": "8A",
  "title": "Counter app — StatefulWidget & Provider()",
  "question": "A. Develop a Flutter counter application using StatefulWidget and Provider(). Provide buttons to increment and decrement the counter and display the updated value.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\nimport 'package:provider/provider.dart';\n\n// Add to pubspec.yaml under dependencies:\n// provider: ^6.1.2\n\nvoid main() {\n  runApp(\n    ChangeNotifierProvider(\n      create: (_) => Counter(),\n      child: const MaterialApp(home: CounterApp()),\n    ),\n  );\n}\n\nclass Counter extends ChangeNotifier {\n  int count = 0;\n\n  void increment() {\n    count++;\n    notifyListeners();\n  }\n\n  void decrement() {\n    count--;\n    notifyListeners();\n  }\n}\n\nclass CounterApp extends StatelessWidget {\n  const CounterApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Counter App using Provider')),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            Consumer<Counter>(\n              builder: (context, counter, child) => Text(\n                'Count: ${counter.count}',\n                style: const TextStyle(fontSize: 30),\n              ),\n            ),\n            ElevatedButton(\n              onPressed: () =>\n                  Provider.of<Counter>(context, listen: false).increment(),\n              child: const Text('Increase'),\n            ),\n            ElevatedButton(\n              onPressed: () =>\n                  Provider.of<Counter>(context, listen: false).decrement(),\n              child: const Text('Decrease'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
   }
  ],
  "image": "q8a-output.svg",
  "note": "Add provider: ^6.1.2 under dependencies in pubspec.yaml."
 },
 {
  "id": "8B",
  "title": "Widget test + print() / debugPrint() debugging",
  "question": "B. Develop a Flutter application and write a test to verify that a UI component displays the expected text, and use debugging statements such as print() or debugPrint() to identify and handle an error during execution.",
  "files": [
   {
    "name": "main.dart",
    "code": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(MaterialApp(home: Home()));\n}\n\nclass Home extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    debugPrint(\"Home screen loaded\");\n\n    return Scaffold(\n      appBar: AppBar(title: Text(\"UI Testing\")),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            print(\"Button clicked\");\n            debugPrint(\"Testing completed\");\n          },\n          child: Text(\"Click Me\"),\n        ),\n      ),\n    );\n  }\n}\n"
   },
   {
    "name": "widget_test.dart",
    "code": "import 'package:flutter_test/flutter_test.dart';\nimport 'package:flutter/material.dart';\nimport 'package:your_app/main.dart';\n\nvoid main() {\n  testWidgets('Button test', (tester) async {\n    await tester.pumpWidget(MaterialApp(home: Home()));\n\n    expect(find.text('Click Me'), findsOneWidget);\n\n    await tester.tap(find.text('Click Me'));\n    await tester.pump();\n  });\n}\n"
   }
  ],
  "image": "q8b-output.svg",
  "note": "Test file goes in test/widget_test.dart. Replace your_app in the import with your real package name. Run with: flutter test"
 }
];

/* ---------- tiny Dart syntax highlighter (per line) ---------- */
function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var TOKEN_RE = /('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|(\/\/.*$)|(@\w+)|\b(import|void|class|extends|implements|with|final|const|var|late|return|if|else|switch|case|default|break|for|while|do|true|false|null|super|this|required|new|in|is|as|async|await|static|get|set|int|double|String|bool|List|Map|Set|dynamic|Function|print)\b|(\b\d+(?:\.\d+)?\b)|(\b[A-Z]\w*)/g;
function highlightLine(line) {
  var out = "", last = 0, m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(line)) !== null) {
    out += escHtml(line.slice(last, m.index));
    var cls = m[1] ? "tok-s" : m[2] ? "tok-c" : m[3] ? "tok-a"
            : m[4] ? "tok-k" : m[5] ? "tok-n" : "tok-t";
    out += '<span class="' + cls + '">' + escHtml(m[0]) + "</span>";
    last = m.index + m[0].length;
  }
  out += escHtml(line.slice(last));
  return out || " ";
}
function codeHtml(code) {
  var lines = code.replace(/\n$/, "").split("\n");
  var html = "";
  for (var i = 0; i < lines.length; i++) {
    html += '<div class="cl"><span class="ln">' + (i + 1) + '</span><span class="lc">'
          + highlightLine(lines[i]) + "</span></div>";
  }
  return html;
}
function copyText(text, btn) {
  function done() {
    var oldLabel = btn.dataset.label || btn.textContent;
    btn.dataset.label = oldLabel;
    btn.textContent = "✓ Copied";
    btn.classList.add("done");
    setTimeout(function () { btn.textContent = oldLabel; btn.classList.remove("done"); }, 1600);
  }
  function fallback() {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.top = "0"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); }
    catch (e) { btn.textContent = "Copy failed"; }
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(fallback);
  else fallback();
}
function fullCode(q) {
  if (q.files.length === 1) return q.files[0].code;
  return q.files.map(function (f) { return "// File: " + f.name + "\n" + f.code; }).join("\n");
}

var current = null;
var activeFile = 0;

function setActiveFile(index) {
  if (!current || !current.files[index]) return;
  activeFile = index;
  document.querySelectorAll(".editor-tab").forEach(function (tab) {
    tab.classList.toggle("active", Number(tab.dataset.file) === index);
  });
  document.querySelectorAll(".file-pane").forEach(function (pane) {
    pane.style.display = Number(pane.dataset.file) === index ? "block" : "none";
  });
  document.getElementById("crumbFile").textContent = current.files[index].name === "widget_test.dart" ? "test/widget_test.dart" : "lib/" + current.files[index].name;
  document.getElementById("editorCopyBtn").onclick = function () { copyText(current.files[index].code, this); };
  document.getElementById("mainFileTree").classList.toggle("active", index === 0);
  document.getElementById("testFileTree").classList.toggle("active", index === 1);
}

function showQuestion(id, scrollTop) {
  var q = null, idx = 0;
  for (var i = 0; i < QUESTIONS.length; i++) {
    if (QUESTIONS[i].id === id) { q = QUESTIONS[i]; idx = i; break; }
  }
  if (!q) { q = QUESTIONS[0]; idx = 0; }
  current = q;
  document.title = "Question " + q.id + " — Flutter Lab Exam";
  document.getElementById("qpos").textContent = "Question " + q.id + " • " + (idx + 1) + " of " + QUESTIONS.length;

  var ed = document.getElementById("editor");
  var tabBar = document.getElementById("editorTabs");
  ed.innerHTML = "";
  tabBar.innerHTML = "";
  q.files.forEach(function (f, fileIndex) {
    var tab = document.createElement("button");
    tab.className = "editor-tab" + (fileIndex === 0 ? " active" : "");
    tab.type = "button";
    tab.dataset.file = String(fileIndex);
    tab.innerHTML = '<span class="dart-file-dot">◆</span><span>' + escHtml(f.name) + '</span>';
    tab.addEventListener("click", function () { setActiveFile(fileIndex); });
    tabBar.appendChild(tab);

    var pane = document.createElement("div");
    pane.className = "file-pane";
    pane.dataset.file = String(fileIndex);
    pane.style.display = fileIndex === 0 ? "block" : "none";
    var code = document.createElement("div");
    code.className = "code";
    code.innerHTML = codeHtml(f.code);
    pane.appendChild(code);
    ed.appendChild(pane);
  });
  activeFile = 0;
  document.getElementById("crumbFile").textContent = "lib/" + q.files[0].name;
  document.getElementById("mainFileTree").innerHTML = '<span class="file-icon">◆</span> ' + escHtml(q.files[0].name);
  document.getElementById("mainFileTree").classList.add("active");
  var testTree = document.getElementById("testFileTree");
  testTree.hidden = q.files.length < 2;
  document.getElementById("testFolderRoot").hidden = q.files.length < 2;
  if (q.files.length > 1) testTree.innerHTML = '<span class="file-icon test-icon">◇</span> ' + escHtml(q.files[1].name);
  testTree.classList.remove("active");
  testTree.style.display = q.files.length > 1 ? "flex" : "none";

  var note = document.getElementById("pubNote");
  if (q.note) { note.hidden = false; note.textContent = q.note; }
  else { note.hidden = true; note.textContent = ""; }

  var img = document.getElementById("outputImg");
  img.src = "images/" + q.image;
  img.alt = "Expected output for Question " + q.id;
  document.getElementById("qHeading").textContent = "Question " + q.id;
  document.getElementById("qTitle").textContent = q.title;
  document.getElementById("qText").textContent = q.question;

  var nav = document.getElementById("qnav").children;
  for (var j = 0; j < nav.length; j++) nav[j].classList.toggle("active", QUESTIONS[j].id === q.id);

  document.getElementById("consoleContent").innerHTML =
    '<span class="success-tick">✓</span> Source loaded for Question ' + q.id + '. No live Flutter compilation is performed on this page.';
  if (history.replaceState) {
    try { history.replaceState(null, "", "#q=" + q.id); } catch (e) {}
  }
  if (scrollTop) window.scrollTo({ top: 0, behavior: "auto" });
}

(function buildNav() {
  var nav = document.getElementById("qnav");
  QUESTIONS.forEach(function (q) {
    var b = document.createElement("button");
    b.className = "qbtn"; b.type = "button"; b.textContent = q.id;
    b.addEventListener("click", function () { showQuestion(q.id, true); });
    nav.appendChild(b);
  });
})();

document.getElementById("runBtn").addEventListener("click", function () {
  document.getElementById("output").scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("consoleContent").innerHTML =
    '<span class="success-tick">✓</span> Expected-output reference loaded for Question ' + current.id + '. To execute the Dart code, open it in DartPad or Flutter.';
});
document.getElementById("copyBtn").addEventListener("click", function () {
  if (current) copyText(fullCode(current), this);
});
document.getElementById("reloadBtn").addEventListener("click", function () {
  if (current) showQuestion(current.id, false);
});
document.getElementById("editorCopyBtn").addEventListener("click", function () {
  if (current) copyText(current.files[activeFile].code, this);
});
document.getElementById("mainFileTree").addEventListener("click", function () { setActiveFile(0); });
document.getElementById("testFileTree").addEventListener("click", function () { setActiveFile(1); });
document.getElementById("questionToggle").addEventListener("click", function () {
  var drawer = document.getElementById("questionSec");
  drawer.classList.toggle("collapsed");
  var open = !drawer.classList.contains("collapsed");
  this.textContent = open ? "expand_more" : "expand_less";
  this.setAttribute("aria-expanded", String(open));
});
document.getElementById("qBtn").addEventListener("click", function () {
  var drawer = document.getElementById("questionSec");
  drawer.classList.remove("collapsed");
  var toggle = document.getElementById("questionToggle");
  toggle.textContent = "expand_more";
  toggle.setAttribute("aria-expanded", "true");
  drawer.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("previewToggle").addEventListener("click", function () {
  var preview = document.querySelector(".preview-column");
  var workspace = document.querySelector(".workspace");
  preview.classList.toggle("collapsed");
  workspace.classList.toggle("preview-hidden");
  this.textContent = preview.classList.contains("collapsed") ? "‹" : "›";
});
document.getElementById("expandPreview").addEventListener("click", function () {
  document.getElementById("output").classList.toggle("expanded");
});
document.querySelector(".device-select").addEventListener("click", function () {
  var frame = document.querySelector(".device-frame");
  frame.classList.toggle("desktop");
  this.innerHTML = frame.classList.contains("desktop") ? "▭　Web　⌄" : "▣　Mobile　⌄";
});
document.querySelectorAll(".console-tab").forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".console-tab").forEach(function (t) { t.classList.remove("active"); });
    tab.classList.add("active");
    if (index === 1) {
      document.getElementById("consoleContent").innerHTML = "Console output is not generated here. Run the source in DartPad or Flutter to view runtime logs.";
    } else {
      document.getElementById("consoleContent").innerHTML = '<span class="success-tick">✓</span> Static source viewer • no analyzer connected.';
    }
  });
});

var startId = "1A";
var match = location.hash.match(/q=([1-8][AB])/);
if (match) startId = match[1];
showQuestion(startId, false);

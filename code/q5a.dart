import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Row and Column")),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text("ROW LAYOUT"),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              Icon(Icons.home, size: 40),
              Icon(Icons.person, size: 40),
              Icon(Icons.settings, size: 40),
            ],
          ),
          const SizedBox(height: 40),
          const Text("COLUMN LAYOUT"),
          Column(
            children: const [
              Icon(Icons.home, size: 40),
              Icon(Icons.person, size: 40),
              Icon(Icons.settings, size: 40),
            ],
          ),
        ],
      ),
    );
  }
}

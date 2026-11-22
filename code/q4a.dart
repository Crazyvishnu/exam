import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("My App")),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(20),
          color: Colors.blue.shade100,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text("Welcome to Flutter",
                  style: TextStyle(fontSize: 22)),
              Image.network(
                "https://picsum.photos/150",
                height: 100,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

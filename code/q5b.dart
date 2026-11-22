import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: MyApp()));

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool show = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Animations")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedOpacity(
              opacity: show ? 1 : 0,
              duration: const Duration(seconds: 1),
              child: const Text("Fade Animation",
                  style: TextStyle(fontSize: 25)),
            ),
            AnimatedSlide(
              offset: show ? Offset.zero : const Offset(2, 0),
              duration: const Duration(seconds: 1),
              child: const Icon(Icons.star, size: 60),
            ),
            ElevatedButton(
              onPressed: () => setState(() => show = !show),
              child: const Text("Animate"),
            ),
          ],
        ),
      ),
    );
  }
}

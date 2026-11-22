import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Add to pubspec.yaml under dependencies:
// provider: ^6.1.2

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => Counter(),
      child: const MaterialApp(home: CounterApp()),
    ),
  );
}

class Counter extends ChangeNotifier {
  int count = 0;

  void increment() {
    count++;
    notifyListeners();
  }

  void decrement() {
    count--;
    notifyListeners();
  }
}

class CounterApp extends StatelessWidget {
  const CounterApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter App using Provider')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Consumer<Counter>(
              builder: (context, counter, child) => Text(
                'Count: ${counter.count}',
                style: const TextStyle(fontSize: 30),
              ),
            ),
            ElevatedButton(
              onPressed: () =>
                  Provider.of<Counter>(context, listen: false).increment(),
              child: const Text('Increase'),
            ),
            ElevatedButton(
              onPressed: () =>
                  Provider.of<Counter>(context, listen: false).decrement(),
              child: const Text('Decrease'),
            ),
          ],
        ),
      ),
    );
  }
}

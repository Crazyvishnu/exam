import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(
  home: MyApp(),
));

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Combined Layout')),
      body: Column(
        children: [
          Stack(
            children: [
              Image.network(
                'https://picsum.photos/400/200',
                width: double.infinity,
                height: 200,
                fit: BoxFit.cover,
              ),
              const Positioned(
                bottom: 10,
                left: 10,
                child: Text(
                  'MGIT',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ),
            ],
          ),

          const SizedBox(height: 20),

          const Column(
            children: [
              Text('Welcome to MGIT'),
              Text('UI Design using Flutter'),
            ],
          ),

          const SizedBox(height: 20),

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              const Icon(Icons.home),
              const Icon(Icons.school),
              ElevatedButton(
                onPressed: () {},
                child: const Text('Start'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

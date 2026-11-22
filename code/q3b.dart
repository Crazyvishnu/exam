import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  theme: ThemeData(
    colorSchemeSeed: Colors.blue,
    useMaterial3: true,
  ),
  home: const Home(),
));

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Student Cards")),
      body: Column(
        children: const [
          StudentCard(name: "Vishnu", branch: "CSE"),
          StudentCard(name: "Rahul", branch: "IT"),
        ],
      ),
    );
  }
}

class StudentCard extends StatelessWidget {
  final String name, branch;

  const StudentCard({
    super.key,
    required this.name,
    required this.branch,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.blue.shade100,
      child: ListTile(
        leading: const Icon(Icons.person),
        title: Text(name,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          )),
        subtitle: Text(branch),
      ),
    );
  }
}

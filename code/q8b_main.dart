import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(home: Home()));
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    debugPrint("Home screen loaded");

    return Scaffold(
      appBar: AppBar(title: Text("UI Testing")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            print("Button clicked");
            debugPrint("Testing completed");
          },
          child: Text("Click Me"),
        ),
      ),
    );
  }
}

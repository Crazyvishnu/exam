import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MaterialApp(home: ApiApp()));

class ApiApp extends StatefulWidget {
  @override
  State<ApiApp> createState() => _ApiAppState();
}

class _ApiAppState extends State<ApiApp> {
  String data = "Loading...";

  void getData() async {
    var url = Uri.parse('https://jsonplaceholder.typicode.com/users/1');
    var response = await http.get(url);

    var result = jsonDecode(response.body);

    setState(() {
      data = result['name'];
    });
  }

  @override
  void initState() {
    super.initState();
    getData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('API Data')),
      body: Center(
        child: Text(data, style: TextStyle(fontSize: 25)),
      ),
    );
  }
}

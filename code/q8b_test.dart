import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/material.dart';
import 'package:your_app/main.dart';

void main() {
  testWidgets('Button test', (tester) async {
    await tester.pumpWidget(MaterialApp(home: Home()));

    expect(find.text('Click Me'), findsOneWidget);

    await tester.tap(find.text('Click Me'));
    await tester.pump();
  });
}

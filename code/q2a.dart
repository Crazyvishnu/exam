void main() {
  // List
  List<int> marks = [80, 90, 75];
  print("List: $marks");

  // Map
  Map<String, int> student = {"Age": 20, "Marks": 90};
  print("Map: $student");

  // Set
  Set<int> numbers = {10, 20, 30, 10};
  print("Set: $numbers");

  // If-else
  int age = 20;
  if (age >= 18)
    print("Eligible");
  else
    print("Not Eligible");

  // Switch
  int day = 1;
  switch (day) {
    case 1:
      print("Monday");
      break;
    default:
      print("Invalid Day");
  }

  // For loop
  for (int i = 1; i <= 5; i++) {
    print(i);
  }

  // While loop
  int j = 1;
  while (j <= 5) {
    print(j);
    j++;
  }
}

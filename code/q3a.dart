void main() {
  // Variables and constants
  var name = "Vishnu";
  final age = 20;
  const college = "MGIT";

  // Null Safety
  String? city;
  print(city);

  // Positional parameter
  add(int a, int b) {
    print(a + b);
  }
  add(10, 20);

  // Optional parameter
  greet(String name, [String city = "Hyderabad"]) {
    print("$name $city");
  }
  greet("Vishnu");

  // Named parameter
  details({required String name, required int age}) {
    print("$name $age");
  }
  details(name: name, age: age);

  print(age);
  print(college);
}

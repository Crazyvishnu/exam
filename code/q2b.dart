import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: Shop()));

class Shop extends StatefulWidget {
  const Shop({super.key});

  @override
  State<Shop> createState() => _ShopState();
}

class _ShopState extends State<Shop> {
  int page = 0;
  int selected = 0;
  List cart = [];

  List products = [
    ['Shoes', 1000],
    ['Watch', 2000],
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Shopping App")),
      body: page == 0
          ? Column(children: [
              for (int i = 0; i < products.length; i++)
                ListTile(
                  leading: const Icon(Icons.shopping_bag),
                  title: Text(products[i][0]),
                  subtitle: Text("₹${products[i][1]}"),
                  onTap: () => setState(() {
                    selected = i;
                    page = 1;
                  }),
                ),
            ])
          : page == 1
              ? Column(children: [
                  Text(products[selected][0]),
                  Text("₹${products[selected][1]}"),
                  ElevatedButton(
                    onPressed: () => setState(() {
                      cart.add(products[selected]);
                      page = 2;
                    }),
                    child: const Text("Add to Cart"),
                  ),
                ])
              : Column(children: [
                  const Text("My Cart"),
                  for (var p in cart)
                    Text("${p[0]} - ₹${p[1]}"),
                ]),
      bottomNavigationBar: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          TextButton(
            onPressed: () => setState(() => page = 0),
            child: const Text("Home"),
          ),
          TextButton(
            onPressed: () => setState(() => page = 2),
            child: const Text("Cart"),
          ),
        ],
      ),
    );
  }
}

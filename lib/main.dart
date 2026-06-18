import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// Farmer list - Indha list la nee name, password add panalam
final farmers = [
  {'name': 'Ravi', 'pass': '1111', 'crop': 'Nelli', 'area': '2 Acre'},
  {'name': 'Kumar', 'pass': '2222', 'crop': 'Karakam', 'area': '1.5 Acre'},
  {'name': 'Siva', 'pass': '3333', 'crop': 'Ma', 'area': '3 Acre'},
];

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Smart Farmer Login',
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  TextEditingController nameController = TextEditingController();
  TextEditingController passController = TextEditingController();
  String message = '';

  void checkLogin() {
    String username = nameController.text;
    String password = passController.text;
    
    // Idhu dhan multi-user check panra logic
    var found = farmers.firstWhere(
      (f) => f['name'] == username && f['pass'] == password,
      orElse: () => {},
    );

    setState(() {
      if (found.isNotEmpty) {
        message = 'Varuga ${found['name']}! Un crop: ${found['crop']}';
      } else {
        message = 'Thappu password da';
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Farmer Login')),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: 'Username'),
            ),
            TextField(
              controller: passController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: checkLogin,
              child: Text('Login'),
            ),
            SizedBox(height: 20),
            Text(message, style: TextStyle(fontSize: 18, color: Colors.green)),
          ],
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';

void main() {
  runApp(WanderApp());
}

class WanderApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'wander',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Inter',
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('wander'),
        actions: [
          IconButton(
            icon: Icon(Icons.login),
            onPressed: () {
              // Handle login
            },
          ),
          IconButton(
            icon: Icon(Icons.app_registration),
            onPressed: () {
              // Handle register
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            HeroSection(),
            DescriptionSection(),
            FooterSection(),
          ],
        ),
      ),
    );
  }
}

class HeroSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Text(
            'explore with confidence',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 16),
          Text(
            'your eye in the sky...',
            style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {
              // Handle start wandering
            },
            child: Text('start wandering'),
          ),
        ],
      ),
    );
  }
}

class DescriptionSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Image.asset('assets/images/1-400w.jpeg'),
          SizedBox(height: 16),
          Image.asset('assets/images/3-700w.jpeg'),
          SizedBox(height: 16),
          Text(
            'new cities can be scary.',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 16),
          Image.asset('assets/images/4-700w.jpeg'),
          SizedBox(height: 16),
          Text('explore with confidence'),
          Text('explore with confidence'),
          Text('explore with confidence'),
          SizedBox(height: 16),
          Text(
            '“is that area okay to walk through?”',
            style: TextStyle(fontStyle: FontStyle.italic),
          ),
          Text('— academic wanderer'),
          Text('— city wanderer'),
          Text(
            '“are there any parts i should stay away from?”',
            style: TextStyle(fontStyle: FontStyle.italic),
          ),
          SizedBox(height: 16),
          Text(
            'wander.ai',
            style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
          ),
          Text(
            'explore cities confidently with',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          Image.asset('assets/images/2-400w.jpeg'),
        ],
      ),
    );
  }
}

class FooterSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      color: Colors.grey[200],
      child: Column(
        children: [
          Text(
            'wander.ai',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
          Text('making wandering more, safe'),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                icon: Image.asset('assets/icons/twitter.svg'),
                onPressed: () {
                  // Handle Twitter
                },
              ),
              IconButton(
                icon: Image.asset('assets/icons/discord.svg'),
                onPressed: () {
                  // Handle Discord
                },
              ),
            ],
          ),
          SizedBox(height: 16),
          Text('© 2025 wander.ai. All Rights Reserved.'),
        ],
      ),
    );
  }
}
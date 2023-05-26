import 'package:flutter/material.dart';

class NewPage extends StatefulWidget {
  static const String routeName = '/new_page';

  @override
  _NewPageState createState() => _NewPageState();
}

class _NewPageState extends State<NewPage> {
  bool showComments = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('New Page'),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 24,
                    backgroundColor: Colors.blue,
                    child: Text(
                      'User',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                  SizedBox(width: 16.0),
                  Text(
                    'User Name',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                  borderRadius: BorderRadius.circular(8.0),
                ),
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Truongducthien',
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      'Toilatruongducthien',
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                  borderRadius: BorderRadius.circular(8.0),
                ),
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Friends',
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        CircleAvatar(
                          radius: 32,
                          backgroundImage: AssetImage('assets/friend1.jpg'),
                        ),
                        CircleAvatar(
                          radius: 32,
                          backgroundImage: AssetImage('assets/friend2.jpg'),
                        ),
                        CircleAvatar(
                          radius: 32,
                          backgroundImage: AssetImage('assets/friend3.jpg'),
                        ),
                      ],
                    ),
                    SizedBox(height: 16.0),
                    TextButton(
                      onPressed: () {
                        // TODO: Implement load more functionality
                      },
                      child: Text(
                        'Load More',
                        style: TextStyle(fontSize: 16),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                  borderRadius: BorderRadius.circular(8.0),
                ),
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'User Name',
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      'Description',
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 16.0),
                    TextButton(
                      onPressed: () {
                        // TODO: Implement view more user names functionality
                        setState(() {
                          showComments = !showComments;
                        });
                      },
                      child: Text(
                        showComments ? 'Hide User Names' : 'View User Names',
                        style: TextStyle(fontSize: 16),
                      ),
                    ),
                    if (showComments)
                      Column(
                        children: [
                          SizedBox(height: 16.0),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text('Commenter 1'),
                                  Text('Comment 1'),
                                ],
                              ),
                            ],
                          ),
                          SizedBox(height: 8.0),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text('Commenter 2'),
                                  Text('Comment 2'),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';

void main() {
  runApp(AppbarDemoApp());
}

class AppbarDemoApp extends StatelessWidget {

  AppbarDemoApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Facebook Demo",
            textAlign: TextAlign.center,
          ),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.delete),
              onPressed: null,
            ),
          ],
        ),
        body: Column(
          textDirection: TextDirection.ltr,
          children: <Widget>[
            TextFormField(
              decoration: InputDecoration(
                labelText: "Tìm kiếm",
                fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(25.0),
                  borderSide: BorderSide(),
                ),
                prefixIcon: Icon(Icons.search),
              ),
              style: const TextStyle(
                fontFamily: "Inter",
              ),
              textAlign: TextAlign.left,
            ),
            Row(
              children: <Widget>[
                Container(
                  margin: EdgeInsets.all(15),
                  width: 250,
                  height: 250,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25.0),
                    border: Border.all(),
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(15),
                  width: 250,
                  height: 250,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25.0),
                    border: Border.all(),
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(15),
                  width: 250,
                  height: 250,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25.0),
                    border: Border.all(),
                  ),
                ),
              ]
            ),
            Column(
              children: <Widget>[
                Container(
                  margin: EdgeInsets.only(top: 50, left: 100, right: 100, bottom: 50),
                  width: 500,
                  height: 180,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(25.0),
                    border: Border.all(),
                  ),
                  child: Column(
                    children: <Widget>[
                      Container(
                        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
                        height: 60,
                        width: double.infinity,
                        child: Row(
                          children: <Widget>[
                            Padding(
                              padding: const EdgeInsets.all(20),
                              child: CircleAvatar(
                                backgroundColor: Colors.green,
                                radius: 100,
                              )
                            ),
                            Padding(padding: const EdgeInsets.all(20),
                            child: 
                              Text("User 1", textAlign: TextAlign.left,)
                            ),
                          ],
                          )
                      )
                    ],
                  )
                ),
              ]
            )

          ],
          /*ListView.custom(
            childrenDelegate: SliverChildBuilderDelegate((ctx, i) {
              return ListTile(
                leading: Icon(Icons.check_circle),
              );
            }, childCount: 4),
          )*/
        ),
      )
    );
  }
}
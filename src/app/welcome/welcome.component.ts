import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import 'rxjs/Rx';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import * as $ from 'jquery';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})



export class WelcomeComponent implements OnInit { 

  roles = [
    { value: 'Blockchain', display: 'Blockchain' },
    { value: 'LifeHack', display: 'LifeHack' },
    { value: 'Test', display: 'Test' }
];


  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire, public http: Http) {
    this.items = af.database.list('', {
      query: {
        limitToLast: 4
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  addItem(newName: string, rolecat:string) {


     $.get(newName, ((data) => {
       //onsole.log(data);
        const desc = $(data).filter('meta[name="description"]').attr("content");
const title = $(data).filter('title').text();



        this.items.push({
      text: newName,
      category: rolecat,
      description: desc,
      title: title
    });
    }))

    /*.then(f => {

      console.log("---",$(f).filter('meta[name="description"]').attr("content"));
      fs = $(f).filter('meta[name="description"]').attr("content");
      /*this.items.push({
      text: newName,
      category: rolecat,
      description: $(f).filter('meta[name="description"]').attr("content")
    });*/
    

    /*this.http.get('http://www.stackoverflow.com').subscribe(response => {
      console.log("----",response.text())
    })/*
    
/*let ff;
var headers = new Headers();
headers.append('x-forwarded-host', 'foo');
this.http.get(newName, {headers: headers}).subscribe(response => {
  console.log(response)
  ff = response.json()
})*/





    /*this.items.push({
      text: newName,
      category: rolecat
    });*/
  }

  ngOnInit() {
  }

}

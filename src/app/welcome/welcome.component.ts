import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import 'rxjs/Rx';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { 

  roles = [
    { value: 'adminxxx', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
];


  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('', {
      query: {
        limitToLast: 4
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  addItem(newName: string, rolecat:string) {
    this.items.push({
      text: newName,
      category: rolecat
    });
  }

  ngOnInit() {
  }

}

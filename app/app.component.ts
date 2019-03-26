import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private mydata;
  private restaurants: Observable<any>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {

    this.db.list('restaurants').valueChanges().map(x => {
      console.log("restaurants !");
      console.log(x);
    });
  }//ngOnInit ends




}

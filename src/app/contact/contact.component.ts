import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 41.9981;
  lng = 21.4254;
  zoom = 12;


  constructor() {
  }

  ngOnInit() {
  }
}


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }
  mysecondfunction() {
    console.log('secondchild');
  }
}

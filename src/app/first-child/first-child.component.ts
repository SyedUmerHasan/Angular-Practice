import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})

export class FirstChildComponent implements OnInit {
  @Input() data: string;
  @Input() mainbodyfunction: () => {};
  first = '';

  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log(this.first);
  }
  clickme() {
    // this.mainbodyfunction();
  }
}

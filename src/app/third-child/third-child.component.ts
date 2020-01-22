import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit {
  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

}

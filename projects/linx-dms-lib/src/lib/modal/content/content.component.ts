import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tabOpened: string;
  constructor() { }

  ngOnInit() {
  }

  openTab(tab: string) {
    this.tabOpened = tab;
  }

}

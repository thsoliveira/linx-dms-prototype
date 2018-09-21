import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  activeContent: boolean;

  constructor(private router: Router) {
    this.activeContent = false;
  }

  ngOnInit() {

  }

  redireciona() {
    this.router.navigate(['/']);
  }

  showContent() {
    this.activeContent = true;
  }

}

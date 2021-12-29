import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.hide = !this.hide;
  }

  handleBlur() {
    this.hide = true;
  }

}
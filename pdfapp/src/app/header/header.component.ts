import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('test', [
      // state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        // style({ transform: 'translateY(-10%)' }),
        // animate(400)
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        // animate(400, style({ transform: 'translateY(-10%)' }))
        animate('400ms', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showsidenav: boolean = true;
  hidesidenav: boolean = false;
  usermenu: boolean = false;
  loggedin: boolean = false;
  usertoken: any;
  constructor(
    private router: Router
  ) {
    window.header = this;
  }

  ngOnInit(): void {
    this.usertoken = localStorage.getItem('token');
  
  }

 
  showSidenav() {
    this.showsidenav = false;
    this.hidesidenav = true;
    window.sidebar.sideBar = true;
  }

  hideSidenav() {
    this.showsidenav = true;
    this.hidesidenav = false;
    window.sidebar.sideBar = false;
  }

  }





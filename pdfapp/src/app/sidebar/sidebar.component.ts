import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, style, animate, transition, state } from '@angular/animations';
declare var window: any;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  animations: [
    trigger('check', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {
  sideBar: boolean = false;
  showsetting: boolean = true;
  hidesetting: boolean = false;

  constructor(private router: Router) {
    window.sidebar = this;
  }

  ngOnInit(): void {
  }

  // function to go to dashboard
  gotoDashboard() {
    window.header.showsidenav = true;
    window.header.hidesidenav = false;
    this.sideBar = false;
    this.router.navigate(["/home"]);
  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFullScreen(){
    //Event to select full screen
  }

  onSave(){
    alert("Sorry - Coming Soon!");
  }
}

import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

}

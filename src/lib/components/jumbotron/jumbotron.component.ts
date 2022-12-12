import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'lib-jumbotron',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

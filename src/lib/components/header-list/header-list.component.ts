import {CommonModule} from '@angular/common';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'lib-header-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {
  @Input()
  dataTile : { icon : string, name : string } = {icon:'', name:''}

  constructor() { }

  ngOnInit() : void {
  }
}

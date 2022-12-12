import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-footer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent {

  @Input()
  records: number = 0


}

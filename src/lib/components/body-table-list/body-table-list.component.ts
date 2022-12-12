import {CommonModule} from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TableMaterialModule} from 'ngx-liburg';

@Component({
  selector: 'lib-body-table-list',
  standalone: true,
  imports: [
    CommonModule, MatCardModule,
    TableMaterialModule
  ],
  templateUrl: './body-table-list.component.html',
  styleUrls: ['./body-table-list.component.scss']
})
export class BodyTableListComponent implements OnChanges {
  columnOne = '';
  columnTwo = '';
  dataSource = [];
  @Input()
  data : any;

  constructor() { }

  public ngOnChanges(changes : SimpleChanges) : void {
    this.dataSource =
      changes['data'].currentValue.map(
        (datas : any) => {
          this.columnOne = datas.columnOne;
          this.columnTwo = datas.columnTwo;
          return {
            actions: [{}],
            editable: false,
            model: {
              ...datas
            }
          };
        });
  }
}

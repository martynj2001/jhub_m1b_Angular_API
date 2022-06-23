import { Component, Input, OnInit } from '@angular/core';
import { DatasetController } from 'chart.js';
import { DataSet } from 'src/app/shared/dataset.model';
import { DataSelectService } from '../data-select.service';

@Component({
  selector: 'app-data-select-item',
  templateUrl: './data-select-item.component.html',
  styleUrls: ['./data-select-item.component.css']
})
export class DataSelectItemComponent implements OnInit {

  @Input() dataset: DataSet;
  @Input() index: number;

  constructor(private dataSetService: DataSelectService) { }

  ngOnInit(): void {
  }

  onDataSetSelected(){
    //Do something with the Dataset to get the API call ready
    console.log("Selected!")
    this.dataSetService.fetchDataSet();
  }

}

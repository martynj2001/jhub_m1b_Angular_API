import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSet } from '../shared/dataset.model';
import { OnsApiCallService } from '../shared/ONSAPICall.service';
import { DataSelectStartComponent } from './data-select-start/data-select-start.component';
import { DataSelectService } from './data-select.service';

@Component({
  selector: 'app-data-select',
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.css']
})
export class DataSelectComponent implements OnInit {

  datasets: DataSet [] = [];

  subscription: Subscription;

  constructor(private onsApiService: OnsApiCallService, private dataSetService: DataSelectService) { }

  ngOnInit(): void {
    this.onsApiService.fetchDataSets();
    this.datasets = this.dataSetService.getDataSets();
    this.subscription = this.dataSetService.dataSetsUpdated.subscribe(
      (dataSets: DataSet[]) => {
        this.datasets = dataSets;
      }
    )
  }

}

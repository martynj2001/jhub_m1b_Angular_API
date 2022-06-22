import { Component, OnInit } from '@angular/core';
import { OnsApiCall } from '../shared/ONSAPICall.service';

@Component({
  selector: 'app-data-select',
  templateUrl: './data-select.component.html',
  styleUrls: ['./data-select.component.css']
})
export class DataSelectComponent implements OnInit {

  constructor(private onsApiService: OnsApiCall) { }

  ngOnInit(): void {
    this.onsApiService.fetchDataSets();
  }

}

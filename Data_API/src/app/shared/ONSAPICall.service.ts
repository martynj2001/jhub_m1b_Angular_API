import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataSet } from "./dataset.model";
import { map } from "rxjs/operators";
import { DataSelectService } from "../data-select/data-select.service";


@Injectable ({providedIn: 'root'})

export class OnsApiCallService {

    constructor( private http: HttpClient, private dataSetService: DataSelectService ){}

    private datasets: DataSet[] = [];

    extractDataSets(response: any){
        for (let item in response.items){
            this.datasets.push(new DataSet(
                response.items[item].description,
                response.items[item].keywords,
                response.items[item].id,
                response.items[item].links.latest_version.href
            ))
        }
        this.dataSetService.setDataSets(this.datasets);
        console.log(this.datasets);
    }

    fetchDataSets(){
        this.http.get<any>("https://api.beta.ons.gov.uk/v1/datasets")
        .pipe(map( response => {this.extractDataSets(response)}))
        .subscribe(
        fetchedDataSets => {
            })
        }
}
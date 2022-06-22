import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataSet } from "./dataset.modle";

@Injectable ({providedIn: 'root'})

export class OnsApiCall {

    constructor( private http: HttpClient){}

    private datasets: DataSet[] = [];

    fetchDataSets(){
        this.http.get("https://api.beta.ons.gov.uk/v1/datasets").subscribe(
            datasets => {
                console.log(datasets);
                //loop through item[] to get datasets.
            }
        )
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataSet } from "../shared/dataset.model";


@Injectable({providedIn: 'root'})

export class DataSelectService {

    constructor(){}

    dataSetsUpdated = new Subject<DataSet[]>();

    private datasets: DataSet[] = [];

    setDataSets(datasets: DataSet[]){
        this.datasets = datasets;
        this.dataSetsUpdated.next(this.datasets.slice());
    }

    getDataSets(){
        return this.datasets.slice();
    }

    getDataSet(id: number){

    }

    fetchDataSet(){
        console.log("Fetching Data Set");
        this.dataSetsUpdated.next(this.datasets.slice());
    }

}
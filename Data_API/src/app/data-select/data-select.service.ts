import { Injectable } from "@angular/core";
import { DataSet } from "../shared/dataset.modle";

@Injectable({providedIn: 'root'})

export class DataSelectService {

    constructor(){}

    private datasets: DataSet[] = [];

    setDataSets(datasets: any){
        

    }

}
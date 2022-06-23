export class DataSet {

    public description: string;
    public keywords: string[];
    public id: string;
    public url: string;

    constructor( desc: string, keys: string[], id: string, url: string){
      this.description = desc;
      this.keywords = keys;
      this.id = id;
      this.url = url;
    }

}



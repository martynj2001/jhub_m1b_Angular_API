export class DataSet {

    public description: string;
    public keywords: string[];
    public id: string;
    public url: string;

    constructor( description: string, keywords: string[], id: string, url: string){
      this.description = description;
      this.keywords = keywords;
      this.id = id;
      this.url = url;
    }

}



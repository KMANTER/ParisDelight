export class Monuments {
    public name: string;
    public secondName: string;
    public checked: boolean;
    public urlimg: string;
    
    constructor(name, secondName, checked, urlimg) {
        this.name = name;
        this.secondName = secondName;
        this.checked = checked;
        this.urlimg = urlimg;
    }
  }
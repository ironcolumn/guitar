import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ()
export class GuitarService {

  constructor ( private http : HttpClient ) {
  }

  public getAll () {
    const url = `guitars`;
    return this.http.get ( url );
  }

  public save ( guitar : Guitar ) {
    const url = `guitars`;
    return this.http.post ( url , guitar );
  }

  public deleteOne ( guitar : Guitar ) {
    const url = `guitars/${guitar.id}`;
    return this.http.delete ( url );
  }

  public searchGuitar ( guitarSpec : GuitarSpec ) {
    const url = `guitars/search`;
    return this.http.post ( url , guitarSpec );
  }

}

export class Guitar {
  constructor ( public id? : number ,
                public builder? : number ,
                public model? : string ,
                public type? : number ,
                public backWood? : number ,
                public topWood? : number ,
                public serialNumber? : number ,
                public price? : number ) {
  }
}

export class GuitarSpec {
  constructor ( public builder? : number ,
                public model? : string ,
                public type? : number ,
                public backWood? : number ,
                public topWood? : number ,
                public serialNumber? : number ) {
  }
}

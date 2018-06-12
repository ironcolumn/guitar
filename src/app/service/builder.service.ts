import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ( )
export class BuilderService {
  constructor ( private http : HttpClient ) {
  }

  public getAll () {
    const url = `builders`;
    return this.http.get ( url );
  }
}

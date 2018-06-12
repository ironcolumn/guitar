import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WoodService {

  constructor(private http: HttpClient) {
  }

  public getAll() {
    const url = `woods`;
    return this.http.get(url);
  }
}

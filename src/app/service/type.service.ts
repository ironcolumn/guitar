import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TypeService {

  constructor(private http: HttpClient) {
  }

  public getAll() {
    const url = `types`;
    return this.http.get(url);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(searchKey?: string, sortKey?: string): Observable<any> {
    let url: string = "";
    if (searchKey !== "") {
      url = `http://localhost:3000/userdata/?search=${searchKey}`;
    } else if (sortKey !== "") {
      url = `http://localhost:3000/userdata/?${sortKey}`;
    } else {
      url = `http://localhost:3000/userdata/`;
    }
    
    return this.http.get(url);
  }
}

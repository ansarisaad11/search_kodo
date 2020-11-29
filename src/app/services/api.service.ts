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
    return this.http.get(url);
  }
}

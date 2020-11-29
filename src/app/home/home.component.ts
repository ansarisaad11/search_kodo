import { Component, OnInit } from '@angular/core';
import { SearchModel } from '../models/search.model';
import { ApiService } from "../services/api.service";
import { PaginationService } from '../services/pager.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private pagination: PaginationService) {}

  searchKey: string = "";
  sortKey: string = "";
  searchData: Array<SearchModel> = [];

  private allItems: Array<SearchModel> = [];

    // pager object
    pager: any = {};

  ngOnInit(): void {
    this.fetchData("",   "");
  }

  fetchData(searchKey:   string, sortKey:   string)   {
    this.apiService.getData(searchKey, sortKey).subscribe((Response) => {
      this.allItems = Response;
      this.setPage(1);
        });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagination.getPager(this.allItems.length, page);

    // get current page of items
    this.searchData = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}

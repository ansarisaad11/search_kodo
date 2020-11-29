import { Component, Input, OnInit } from "@angular/core";
import { SearchModel } from "../models/search.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  constructor() {}

  @Input() tableData: Array<SearchModel> = [];

  ngOnInit(): void {}
}

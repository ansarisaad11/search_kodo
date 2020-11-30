import { Component, Input, OnInit } from "@angular/core";
import { SearchModel } from "../models/search.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() cardData: any;

  ngOnInit(): void {}
}

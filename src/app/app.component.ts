import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./shared/components/dialog.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public chips: string[] = ["chip 1", "chip 2", "chip 3"];

  constructor(private dialog: MatDialog) {}

  toggle(event) {
    console.log(event);
  }

  removeChip(event, chip: string) {
    this.chips = this.chips.filter(el => el !== chip);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {}
}

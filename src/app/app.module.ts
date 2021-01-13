import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogComponent } from "./shared/components/dialog.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [AppComponent, DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

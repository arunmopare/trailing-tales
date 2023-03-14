import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ops-timesheet';
  projects = ["The Distribution Point - TDP",
    "Wausau - WAS",
    "UCS Forest Group - UFG",
    "Thos. Somerville - TSCO",
    "Gerrie Electric - GE",
    "Alaska Industrial Hardware - AIH",
    "Turner Supply - TUS",
    "Mars Supply - MRS",
    "Cogent - OAK",
    "Mellott - MEL",
    "Auer Steel - AST",
    "Polywood - PLY",
    "Rowley Brothers Inc. - RBI",
    "GT Sanders - GTS",
    "Goodin - GDN",
    "Airmar - AMR",
    "Wholesale Caribe - WSC",
    "Fox - FOX",
    "Safeware LLC - SFW",
    "EDCO - EDCO",
    "Replenex - RPLNX",
    "FirstSupply - FS",
    "Shippers Supply - SSI",
    "Mactac - MAC",
    "Hisco - HSC",
    "Unutilized hours",]


  selectedProject = "select";
  hours = 0;
  comment = "";
  finalMessage = "";
  showCopyToClipboard = this.finalMessage !== "";

  selectProjectErrorMessage = "";
  hoursErrorMessage = "";
  commentErrorMessage = "";

  clipboardColor = "primary";
  clipboardText = "Copy to Clipboard";

  doSomething = () => {
    this.selectProjectErrorMessage = "";
    this.hoursErrorMessage = "";
    this.commentErrorMessage = "";

    this.clipboardColor = "primary";
    this.clipboardText = "Copy to Clipboard";

    if (this.selectedProject === 'select') {
      this.selectProjectErrorMessage = "Please select a valid project";
      return;
    }
    if (this.hours === 0) {
      this.hoursErrorMessage = "Please enter valid hours";
      return;
    }
    if (this.comment === '' && this.selectedProject !== "Unutilized hours") {
      this.commentErrorMessage = "Please enter valid comment";
      return;
    }

    if (this.selectedProject === "Unutilized hours") {
      this.finalMessage = `${this.selectedProject}|${this.hours}`
      return;
    }

    this.finalMessage = `${this.selectedProject}|${this.hours}|${this.comment}`
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.finalMessage)
    this.clipboardColor = "success"
    this.clipboardText = "Copied"
  }
}

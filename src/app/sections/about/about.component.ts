import {Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {InfoDialogComponent} from "../../shared/info-dialog/info-dialog.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public scrollService: ScrollService, public dialog: MatDialog) {
  }

  openModal(): void {
    const dialogRef: MatDialogRef<InfoDialogComponent> = this.dialog.open(InfoDialogComponent, {
      panelClass: 'info-dialog-custom-class',
      width: '500px',
      data: {
        message: 'infoModal.message'
      }
    });
  }

}

import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../app.component';

@Component({
  selector: 'event-details-dialog',
  templateUrl: './event-details.component.html'
})

export class EventDetailsDialog {

  constructor(public dialogRef: MatDialogRef<EventDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

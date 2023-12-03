import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AppUsersService } from "./app.users.service";

@Component({
    selector: 'child-component',
    templateUrl: './popup.component.html',
    providers: [AppUsersService]
})

export class PopupComponent {

    constructor(
        public dialogRef: MatDialogRef<PopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private appService: AppUsersService,
    ) { }

    onAddToSelected() {
        this.dialogRef.close(this.data);
    }
}
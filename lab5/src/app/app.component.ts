import { Component, OnInit, Inject } from '@angular/core';
import { AppUsersService } from './app.users.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { PopupComponent } from './popup.component';
import { SelectedComponent } from './selected.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    SelectedComponent,
  ],
  templateUrl: './app.component.html',
  providers: [AppUsersService]
})

export class AppComponent implements OnInit {
  title = 'lab5';

  dataSource: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'login'];

  selected: User[] = [];

  constructor(private appService: AppUsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.appService.getUsers().subscribe(users => {
      this.dataSource = users.results;
    });
  }

  onRowClicked(row: any) {
    const dialogRef = this.dialog.open(PopupComponent, { data: row });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selected.push(result);
      }
    });
  }
}

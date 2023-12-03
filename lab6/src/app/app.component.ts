// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from './api.users.service';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from './popup.component';
import { SelectedService } from './selected.service'; // Import SelectedService

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ApiUsersService],
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(
    private apiUsersService: ApiUsersService,
    private modalController: ModalController,
    private selectedService: SelectedService // Inject SelectedService
  ) {}

  ngOnInit() {
    // Clear selected items on page reload
    this.selectedService.clearSelected();

    this.apiUsersService.getUsers().subscribe((users) => {
      this.users = users.results;
      console.log(users);
    });
  }

  async openDetails(user: any) {
    const modal = await this.modalController.create({
      component: PopupComponent,
      componentProps: {
        user: user,
      },
    });

    return await modal.present();
  }
}

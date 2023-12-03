import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectedService } from './selected.service';

@Component({
    selector: 'popup-component',
    templateUrl: './popup.component.html',
})

export class PopupComponent {
    @Input() user: any;

    constructor(
        private modalController: ModalController,
        private selectedService: SelectedService
    ) { }

    addToSelected() {
        this.selectedService.addToSelected(this.user);
    }

    close() {
        this.modalController.dismiss();
    }

}
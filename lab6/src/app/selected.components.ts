import { Component, OnInit } from '@angular/core';
import { SelectedService } from './selected.service';

@Component({
  selector: 'selected-component',
  templateUrl: './selected.component.html',
})
export class SelectedComponent implements OnInit {
  selected: any[] = [];

  constructor(private selectedService: SelectedService) {}

  ngOnInit() {
    this.selected = [];
    this.selectedService.selected$.subscribe(async (selected) => {
      this.selected = await this.selectedService.getUsers();
    });
  }
}

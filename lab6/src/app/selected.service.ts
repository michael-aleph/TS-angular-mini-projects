// selected.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedService {
  private selected: any[] = [];
  private selectedSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.selected);

  selected$: Observable<any[]> = this.selectedSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const selected = await this.storage.get('selected');
    if (selected) {
      this.selected = selected;
      this.selectedSubject.next(this.selected);
    }
  }

  async addToSelected(user: any) {
    this.selected.push(user);
    await this.storage.set('selected', this.selected);
    this.selectedSubject.next(this.selected);
  }

  getUsers() {
    return this.storage.get('selected');
  }

  clearSelected() {
    this.selected = [];
    this.storage.set('selected', this.selected);
    this.selectedSubject.next(this.selected);
  }
}

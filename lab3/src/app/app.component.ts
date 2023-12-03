import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    img {
      border: 4px solid black;
    }
  `],
  template: `<h3>Оберіть файл для відображення (або вкажіть його абсолютний шлях через файловий менеджер вашої системи):</h3>
               <input type="file" (change)="onFileChange($event)" accept="image/*">
             <br><br>
             <img *ngIf="imageData" [src]="imageData" alt="Image" [style.maxHeight.px]="400" [style.width.px]="calculateWidth()">`
})
export class AppComponent { 
  imageData: string | ArrayBuffer | null = null;

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageData = (e.target as FileReader).result;
      };
      reader.readAsDataURL(file);
    }
  }

  calculateWidth(): number {
    const maxHeight = 400;
    if (this.imageData) {
      const img = new Image();
      img.src = this.imageData.toString();
      const koef = img.width / img.height;
      return maxHeight * koef;
    }
    return 0;
  }
}

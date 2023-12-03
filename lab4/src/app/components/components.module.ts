// components/components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    MainComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ],
  exports: [
    MainComponent,
    ChildComponent,
  ]
})
export class ComponentsModule { }

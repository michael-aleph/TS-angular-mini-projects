import { Component, Input, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'selected-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
    ],
    templateUrl: './selected.component.html',
})

export class SelectedComponent {
    @Input() selected: any[] = [];
}

import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
} from '@angular/material'

@NgModule({
    imports: [
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class AngularMaterialModule { }
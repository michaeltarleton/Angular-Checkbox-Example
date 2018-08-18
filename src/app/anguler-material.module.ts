import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule
} from '@angular/material'

@NgModule({
    imports: [MatCardModule, MatCheckboxModule, MatListModule, MatButtonModule],
    exports: [MatCardModule, MatCheckboxModule, MatListModule, MatButtonModule]
})

export class AngularMaterialModule {}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { deviceSelect } from "./components/deviceSelect/deviceSelect.component"
import { typPojisteni } from "./components/typPojisteni/typPojisteni.component"
import { typUhrady } from "./components/typUhrady/typUhrady.component"

@NgModule ({
    declarations: [
        deviceSelect,
        typPojisteni,
        typUhrady
    ], exports: [
        deviceSelect,
        typPojisteni,
        typUhrady,
    ], imports: [
        CommonModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule
    ]
})

export class sprava {};
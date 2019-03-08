import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { DesignComponent } from "./design/design.component";
import { TemplateComponent } from './template/template.component';
import { HavmorComponent1 } from "./havmor1/havmor.component";
import { MainComponent } from "./main/main.component";
import { AddRMAComponent } from "./add-rma/add-rma.component";
import { FormArrayComponent } from './form-array/form-array.component'

const appRoutes: Routes =[
    {
        path: '', component: MainComponent,
        children: [
            { path: 'welcome', component: WelcomeComponent },
            { path: 'design', component: DesignComponent },
            { path: 'template', component: TemplateComponent },
            { path: 'havmor', component: HavmorComponent1 },
            { path: 'rma', component: AddRMAComponent },
            { path: 'form', component: FormArrayComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule{}
import { Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BindingComponent } from './components/binding/binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgforNgifComponent } from './components/ngfor-ngif/ngfor-ngif.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebComponent } from './components/web/web.component';
import { MobileComponent } from './components/mobile/mobile.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "binding", component: BindingComponent },
    { path: "controlFlow", component: ControlFlowComponent },
    {
        path: "gallery", component: GalleryComponent, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "web", component: WebComponent },
            { path: "mobile", component: MobileComponent },
        ]
    },
    { path: "ngforNgif", component: NgforNgifComponent },
    { path: "contact", component: ContactComponent },





];

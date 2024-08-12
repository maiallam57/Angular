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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "about", component: AboutComponent, title: "About" },
    { path: "binding", component: BindingComponent, title: "Binding" },
    { path: "controlFlow", component: ControlFlowComponent, title: "Control Flow" },
    {
        path: "gallery", component: GalleryComponent, title: "aGllery", children: [
            { path: "", redirectTo: "web", pathMatch: "full" },
            { path: "web", component: WebComponent, title: "Web" },
            { path: "mobile", component: MobileComponent, title: "Mobile" },
        ]
    },
    { path: "ngforNgif", component: NgforNgifComponent, title: "Ngfor NgIf" },
    { path: "contact", component: ContactComponent, title: "Contact" },
    { path: "lazyloading", component: LazyLoadingComponent, title: "Lazy Loading" },




    { path: "**", component: NotFoundComponent, title: "Not Found" },
];

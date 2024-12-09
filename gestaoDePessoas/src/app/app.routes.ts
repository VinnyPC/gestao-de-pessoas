import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'edit', component: EditComponent}
];

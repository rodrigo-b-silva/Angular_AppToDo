import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './tarefas.component';
import { ProjetosComponent } from './projetos.component';
import { PaginaInvalidaComponent } from './paginavalida.component';
import { TarefaComponent } from './tarefa.component';

const rotas: Routes = [
    {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
    {path: 'tarefas', component: TarefasComponent},
    {path: 'tarefas/:id', component: TarefaComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: '**', component: PaginaInvalidaComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ],
    exports: [ RouterModule ]
})

export class  AppRoutingModule { }
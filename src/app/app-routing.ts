import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //módulos  de rotas que serão usados
import { TarefasComponent } from './tarefas.component';
import { ProjetosComponent } from './projetos.component';
import { PaginaInvalidaComponent } from './paginavalida.component';
import { TarefaComponent } from './tarefa.component';
import { NovaTarefaComponent } from './novatarefa.component';


//declaração de rotas para importar na conf de rotas
const rotas: Routes = [
    {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
    {path: 'tarefas', component: TarefasComponent},
    {path: 'tarefas/nova', component: NovaTarefaComponent}, //aqui é importante que esta seja antes de :id, pois senão /nova pode ser interpretada como um id
    {path: 'tarefas/:id', component: TarefaComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: '**', component: PaginaInvalidaComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ], //import a conf de rotas e a configura
    exports: [ RouterModule ] // exporta as rotas para quem chamar
})

export class  AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { TarefasService } from './tarefas.service';
import { ProjetosComponent } from './projetos.component';
import { PaginaInvalidaComponent } from './paginavalida.component';

import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    PaginaInvalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

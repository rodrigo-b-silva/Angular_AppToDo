//módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { ProjetosComponent } from './projetos.component';
import { PaginaInvalidaComponent } from './paginavalida.component';
import { NovaTarefaComponent } from './novatarefa.component';

//routas
import { AppRoutingModule } from './app-routing';

//services
import { TarefasService } from './tarefas.service';
import { ProjetoService } from './projetos.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    PaginaInvalidaComponent,
    NovaTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TarefasService,
    ProjetoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

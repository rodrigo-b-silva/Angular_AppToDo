import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa, TarefasService } from './tarefas.service';
import { Projeto } from './projetos.service'; 

@Component({
  selector: 'tarefa',
  templateUrl: 'novatarefa.component.html',
  styleUrls: ['tarefa.component.css']
})
export class NovaTarefaComponent {

  tarefa: Tarefa = new Tarefa();
  projetos: Projeto[];

  constructor(public ts: TarefasService, 
              public router: Router) { 
  }

  incluirTarefa() {
    this.ts.incluiTarefa(this.tarefa).subscribe(
      (dados) => { 
        this.router.navigate(['/tarefas']);
      } 
    );
  }
}
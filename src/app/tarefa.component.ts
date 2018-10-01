import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';

@Component({
    selector: 'tarefa',
    styleUrls: ['./tarefa.component.css'],
    templateUrl: './tarefa.component.html'
})

export class TarefaComponent {
    tarefa: Tarefa;

    constructor(public ts: TarefasService){
        this.tarefa = ts.getTarefa(2);
    }
}
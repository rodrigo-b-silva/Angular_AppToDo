import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tarefa',
    styleUrls: ['./tarefa.component.css'],
    templateUrl: './tarefa.component.html'
})

export class TarefaComponent {
   
    tarefa: Tarefa;
    id: number;

    constructor(public ts: TarefasService,
                public ar: ActivatedRoute){
        this.id = parseInt(this.ar.snapshot.paramMap.get('id'));
        ts.getTarefa(this.id).subscribe((dado: Tarefa) => {
            this.tarefa = dado;
        });
    }

    

}
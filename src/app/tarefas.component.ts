import { Component } from '@angular/core';
import { Tarefa, TarefasService} from './tarefas.service';

@Component({
    selector: 'tarefas',
    templateUrl: './tarefas.component.html',
    styles: [`
    `]
})

export class TarefasComponent {
    
    tarefas: Tarefa[] = [];

    constructor(public ts: TarefasService){
        ts.getTarefas().subscribe((dados: Tarefa[]) => {
            this.tarefas = dados;
        });
    }

}
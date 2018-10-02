import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'tarefa',
    styles: [`
        input {
            padding: 5px;
            border: thin solid #999;
        }
        input.ng-touched.ng-valid {
            border-left: thick solid #0c0;
        }
        input.ng-touched.ng-invalid {
            border-left: thick solid #c00;
        }
        label {
            float: left; width: 5em;
            padding-top: 2px;
        }
    `],
    templateUrl: './tarefa.component.html'
})

export class TarefaComponent {
   
    tarefa: Tarefa = new Tarefa();

    constructor(public ts: TarefasService,
                public ar: ActivatedRoute,
                public router: Router){
        const id = parseInt(this.ar.snapshot.paramMap.get('id'));
        ts.getTarefa(id).subscribe((dado: Tarefa) => {
            this.tarefa = dado;
        });
    }

    excluirTarefa(){
        this.ts.excluiTarefa(this.tarefa).subscribe(
            () => {
                this.router.navigate(['/tarefas']);
            }
        );
    }

    atualizaTarefa(){
        this.ts.alterarTarefa(this.tarefa).subscribe(
            (dados) => {
                this.router.navigate(['/tarefas']);
            }
        );
    }

    

}
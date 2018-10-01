import { Component } from '@angular/core';
import { TarefasService, Tarefa } from './tarefas.service';
import { ProjetoService, Projeto } from './projetos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'novatarefa',
    templateUrl: './novatarefa.component.html',
})

export class NovaTarefaComponent { 

    tarefa: Tarefa = new Tarefa();
    projetos: Projeto[] = [];

    constructor(public ts: TarefasService,
                public ps: ProjetoService,
                public router: Router){
        ps.getProjetos().subscribe((dados: Projeto[]) => {
            this.projetos = dados;
        });
    }

    incluirTarefa(): void {
        this.ts.incluiTarefa(this.tarefa).subscribe((dados) => {
            this.router.navigate(['/tarefas']);
        });
    }
}
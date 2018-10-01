export class Tarefa{
    codigo: number;
    tarefa: string;
    data: Date;
    prioridade: number;
    codigoProjeto: number
}

export class TarefasService {
    tarefas: Tarefa[] = [
        {   
            codigo: 1,
            tarefa: 'Comprar leite',
            data: new Date(2018, 1, 2),
            prioridade: 2,
            codigoProjeto: 1
        },
        {
            codigo: 2,
            tarefa: 'Passear com o cachorro',
            data: new Date(2018, 2, 25),
            prioridade: 1,
            codigoProjeto: 1
        },
        {
            codigo: 3,
            tarefa: 'relatórios',
            data: new Date(2018, 3, 5),
            prioridade: 3,
            codigoProjeto: 2
        },
        {
            codigo: 4,
            tarefa: 'Planejar marketing',
            data: new Date(2018, 2, 20),
            prioridade: 2,
            codigoProjeto: 2
        }
    ];

    getTarefas(): Tarefa[] {
        return this.tarefas;
    }

    getTarefa(n: number) {
        for(let i=0; i<this.tarefas.length; i++){
            if(this.tarefas[i].codigo == n){
                return this.tarefas[i];
            }
        }
        return null;
    }
}
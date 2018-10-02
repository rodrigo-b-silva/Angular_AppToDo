import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Tarefa{
    codigo: number;
    tarefa: string;
    data: Date;
    prioridade: number;
    codigoProjeto: number
}

@Injectable()
export class TarefasService {

    url: string = 'http://kutova.com/dev/tarefas/api.php';

    constructor(public http: HttpClient) {  }

    //GET
    getTarefas() : Observable<Tarefa[]>{
        return this.http.get<Tarefa[]>(this.url+'/tarefas');
    }
    getTarefa(n: number) : Observable<Tarefa>{
        return this.http.get<Tarefa>(this.url+'/tarefas/' + n);
    }

    //POST
    incluiTarefa(t: Tarefa): Observable<Tarefa> { 
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
        return this.http.post<Tarefa>(this.url+'/tarefas', t, httpOptions);
    }

    //DELETE
    excluiTarefa(t: Tarefa): Observable<any> {
        return this.http.delete(this.url + '/tarefas/' + t.codigo);
    }

    //PUT
    alterarTarefa(t: Tarefa): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
        return this.http.put(this.url+'/tarefas/'+t.codigo, t, httpOptions);
    }


    /*tarefas: Tarefa[] = [
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
    }*/
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Projeto{
    codigo: number;
    projeto: string
}

@Injectable()
export class ProjetoService{

    url: string = 'http://kutova.com/dev/tarefas/api.php';

    constructor(public http: HttpClient){ }

    getProjetos(): Observable<Projeto[]>{
        return this.http.get<Projeto[]>(this.url+'/projetos');
    }


    /*
    projetos: Projeto[] = [
        {
            codigo: 1,
            projeto: 'Projetos de casa'
        },
        {
            codigo: 2,
            projeto: 'Projetos do trabalho'
        }
    ];

    getProjetos(): Projeto[] {
        return this.projetos;
    }

    getProjeto(n: number): Projeto{
        for(let i=0; i<this.projetos.length; i++)
            if(this.projetos[i].codigo == n)
                return this.projetos[i];
        return null;
    }
    */
    
}
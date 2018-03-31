import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()

export class ClassService {

    constructor(public http: HttpClient) {
    }

    create(data) {
        var link = 'http://localhost:3000/class/create';
        var header = { "headers": { "Content-Type": "application/json" } };        
        data = JSON.stringify(data);

        return this.http.post(link, data, header).map((res: Response) => res);
    }

    getClasses(teacher_id) {
        var link = 'http://localhost:3000/class/classes/' + teacher_id;

        return this.http.get(link).map((res: Response) => res);
    }

    getStudents(module_code) {
        var link = 'http://localhost:3000/class/students/' + module_code;

        return this.http.get(link).map((res: Response) => res);
    }
}
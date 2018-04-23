import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {

    constructor(public http: HttpClient) {
    }

    register(data) {
        var link = 'http://localhost:3000/auth/register';
        var header = { "headers": { "Content-Type": "application/json" } };        
        data = JSON.stringify(data);

        return this.http.post(link, data, header).map((res: Response) => res);
    }

    login(data) {

        var link = "http://localhost:3000/auth/login";
        var header = { "headers": { "Content-Type": "application/json" } };
        data = JSON.stringify(data);

        return this.http.post(link, data, header).map((res: Response) => res);
    }

    // testUser(token,data) {
    //     let stringToken = JSON.stringify(token);
    //     var link = "http://localhost:3000/auth/user-test";
    //     var header = { "headers": { "Content-Type": "application/json" } };
    //     data = JSON.stringify(data);

    //     return this.http.post(link, data, header).map((res: Response) => res);

    // }

    getUserInfo(email){

        var link = "http://localhost:3000/user/" + email;
        var header = { "headers": { "Content-Type": "application/json" } };

        return this.http.get(link, header).map((res: Response) => res);
    }
}
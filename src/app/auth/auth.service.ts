import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { User } from "../models/user";
import { Login } from "../models/login";


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(credentials: Login): Observable<User> {
        return this.http.get<any[]>(`./assets/data/data.json`)
            .pipe(
                map((data: any) => {
                    return data.users[0];
                })
            )
    }

}

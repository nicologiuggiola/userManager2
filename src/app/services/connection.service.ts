import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/post';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  users: User[] = []

  constructor(private http: HttpClient) { }

  // fetchUsers(): Promise<Response> {
  //   return fetch('https://jsonplaceholder.typicode.com/users');
  // }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(this.toUpper),
      map(this.log)
    );
  }

  toUpper(usersArray: User[]){
    for (const user of usersArray) {
      user.name = user.name.toUpperCase()
    }
    return usersArray;
  }

  log(usersArray: User[]){
    console.log(usersArray.length);
    return usersArray;
  }

  getPosts(id:number): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id).pipe(map(this.log2));
  }

  
  log2(usersArray: Post[]){
    console.log("ciao",usersArray.length);
    return usersArray;
  }
 
}

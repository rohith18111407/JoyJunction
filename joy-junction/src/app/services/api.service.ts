import { EnvironmentInjector, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from '../../types';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  // httpClient!:HttpClient;
  // ngOnInit(): void {
  //     this.httpClient=inject(HttpClient);
  // }

  // importing httpClient Service which comes from angular service to make REST API calls to specific URLs
  private httpClient=inject(HttpClient);
  // constructor(
  //   private httpClient: HttpClient
  // ) { }


  //url and set of options, T is generic parameter  
  //Observable is used to wait for the request to complete made by the HttpClient to httpServer by observing and HttpClient will return Observable
  get<T>(url:string,options: Options):Observable<T>{
    return this.httpClient.get<T>(url,options) as Observable<T>;
  }

  post<T>(url:string,body:any,options: Options):Observable<T>{
    return this.httpClient.post<T>(url,body,options) as Observable<T>;
  }

  put<T>(url:string,body:any,options: Options):Observable<T>{
    return this.httpClient.put<T>(url,body,options) as Observable<T>;
  }

  delete<T>(url:string,options: Options):Observable<T>{
    return this.httpClient.delete<T>(url,options) as Observable<T>;
  }
}

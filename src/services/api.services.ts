import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class EventsService {
  private apiUrl = environment.apiUrl;
  private apiToken = environment.apiToken;

  constructor(private http: HttpClient) { }


}




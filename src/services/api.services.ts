import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class EventsService {
  private apiUrl = environment.apiUrl;
  private apiToken = environment.apiToken;
  private apiParameterEventName = 'events.json?name&apikey=';
  private apiParameterEventsByAttractions = 'attractions.json?events&apikey=';

  constructor(private http: HttpClient) {
  }

  getEventsByAttractions(): Observable<any> {
    return this.http.get(this.apiUrl + this.apiParameterEventsByAttractions + this.apiToken).pipe(catchError(this.handleError))
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }


}




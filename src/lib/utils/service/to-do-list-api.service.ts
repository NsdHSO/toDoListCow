import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListApiService {
  constructor(
    private readonly _httpClient : HttpClient,
    @Inject(
      'env') private readonly environment : any
  ) { }

  getToDoCow() {
    return this._httpClient.get(`${this.environment.apiProducts}/cow/to-do-list`)
  }
}

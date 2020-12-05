import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDijNRyY3I7ZXBpJflAkuTrmyiAyYhFX6yW9s0F63gOlFCxs-AkH6L6U7cbkz0pDYaXGs4k2Jt-2PYXfm8'
    })

     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
        

   }
}

import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = '';

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        // console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
}

// // Ejemplo de peticion REST Countries
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
// })
// export class HomeComponent {
//   contries: any[] = [];

//   constructor(private http: HttpClient) {
//     this.http
//       .get('https://restcountries.com/v3.1/lang/spanish')
//       .subscribe((response: any) => {
//         this.contries = response;
//       });
//   }
// }

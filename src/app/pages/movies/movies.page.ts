import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';
import { MessagingService } from'src/app/services/messaging.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(
    private movieService: MovieService,
    private messagingService: MessagingService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {this.listenForMessages();}

  listenForMessages() {
    console.log("hhh")
    console.log(this.messagingService.getMessages().subscribe())
    this.messagingService.getMessages().subscribe(async (msg: any) => {
      console.log('kk')
      console.log(msg)
      const alert = await this.alertCtrl.create({
        header: msg.notification.title,
        subHeader: msg.notification.body,
        message: msg.data.info,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }

  requestPermission() {
    this.messagingService.requestPermission().subscribe(
      async token => {
        const toast = await this.toastCtrl.create({
          message: 'Got your token',
          duration: 2000
        });

        toast.present();
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: err,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  async deleteToken() {
    this.messagingService.deleteToken();
    const toast = await this.toastCtrl.create({
      message: 'Token removed',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {}
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
  
}

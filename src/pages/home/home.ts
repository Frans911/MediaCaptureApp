import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureAudioOptions,CaptureVideoOptions } from '@ionic-native/media-capture'; 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private mediaCapture:MediaCapture) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  image(){
   let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options)
   .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  }
  video(){
    let options: CaptureVideoOptions = { limit: 3 };
    this.mediaCapture.captureVideo(options)
   .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  }
  audio(){
    let options: CaptureAudioOptions = { limit: 3 };
    this.mediaCapture.captureAudio(options)
   .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  }

}

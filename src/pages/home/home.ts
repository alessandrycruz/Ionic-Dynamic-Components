import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdItem } from '../../app/ad-item';
import { AdService } from '../../app/ad-service';

@Component({
  selector: 'page-home',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class HomePage {
  ads: AdItem[];

  constructor(public navCtrl: NavController, private adService: AdService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
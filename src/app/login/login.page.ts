import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logoUrl = '../../assets/logo.svg';
  introSeen!: boolean;

  constructor(private router: Router,
    private loadingController: LoadingController) { }

  async ngOnInit() {
    const seen = await Preferences.get({ key: 'intro-seen' });
    this.introSeen = seen.value === 'true';
  }

  async submit() {
    const ionLoading = await this.loadingController.create({
      message: 'Logging in...',
      duration: 2000
    });

    ionLoading.present();
    ionLoading.onDidDismiss().then(() => {
      this.router.navigate(['/menu']);
    });
  }

  finishIntro(): void {
    this.introSeen = true;
    Preferences.set({ key: 'intro-seen', value: 'true' });
  }

  seeIntroAgain(): void {
    this.introSeen = false;
    Preferences.remove({ key: 'intro-seen' });
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  readonly iterable: any[] = Array(10);
  users: any[] = [];
  loading: boolean = true;
  selectedUser: any | undefined;
  page: Element | null = null;
  activeSegment: string = 'details';

  constructor(private alertController: AlertController,
    private toastController: ToastController) { }

  async ngOnInit() {
    this.users = await this.getUsers();
    this.loading = false;
    this.page = document.querySelector('.page');
  }

  async getUsers(): Promise<any> {
    const data = await fetch('https://randomuser.me/api?results=10');
    const json = await data.json();
    return json.results || [];
  }

  async clearList(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete all users?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: async () => {
            this.users = [];
            const toast = await this.toastController.create({
              message: 'All users deleted',
              duration: 2000,
              color: 'danger'
            });

            await toast.present();
          }
        }
      ]
    });

    await alert.present();
  }

  refresh(event: any) {
    this.loading = true;
    this.getUsers().then(users => {
      this.users = users;
      this.loading = false;
    }).finally(() => {
      event.detail.complete();
    });
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }
}

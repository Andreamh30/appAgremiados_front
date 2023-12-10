import { Component } from '@angular/core';
import { AgremiadosService } from '../services/agremiados.service';
import { ModalController } from '@ionic/angular';
import { AddAgremiadoComponent } from '../components/add-agremiado/add-agremiado.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
agremiados:any=[];
  constructor(private agremiadoS:AgremiadosService,
    private modalCtrl: ModalController
    ) {
      this.Agremiados()
    }

    Agremiados() {
      this.agremiadoS.getAgremiado().subscribe(
        (data) => {
          this.agremiados = data; // Asigna los datos recibidos al arreglo agremiados
          this.agremiados.reverse();
        },
        (error) => {
          console.error('Error al obtener agremiados:', error);
        }
      );
    }

    async openNewAgremiado() {
      const modal = await this.modalCtrl.create({
        component: AddAgremiadoComponent,
        mode: 'ios',
        //initialBreakpoint: .5,
        backdropDismiss: false
      });
      await modal.present()
    }
}

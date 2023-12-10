import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AgremiadosService } from 'src/app/services/agremiados.service';

@Component({
  selector: 'app-add-agremiado',
  templateUrl: './add-agremiado.component.html',
  styleUrls: ['./add-agremiado.component.scss'],
})
export class AddAgremiadoComponent  implements OnInit {
  formAgremiado: FormGroup;
  constructor( private agremiadoS:AgremiadosService,
    private fb:FormBuilder,
    private modalCtrl: ModalController) {
      this.formAgremiado = this.fb.group({
        a_paterno: ['', Validators.required],
        a_materno: [''],
        nombre: ['', Validators.required],
        sexo: [''],
        NUP: ['', Validators.required],
        NUE: ['', Validators.required],
        RFC: ['', Validators.required],
        NSS: ['', Validators.required],
        fecha_nacimiento: [null, Validators.required], // Cambiado a date
        telefono: ['', Validators.required],
        cuota: ['', Validators.required]
      }); 
     }

  ngOnInit() {}


 newAgremiado(){
  const newAgremiado = this.formAgremiado.value;

    this.agremiadoS.agregarAgremiado(newAgremiado).subscribe(
      response => {
        console.log('Agremiado agregado correctamente', response);
        this.close()
      },
      error => {
        console.error('Error al agregar agremiado', error);
      }
    );
 }

 async close(){
  await this.modalCtrl.dismiss();
}
}

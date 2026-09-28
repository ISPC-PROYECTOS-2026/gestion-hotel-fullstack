import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors} from '@angular/forms';



@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  this.form = this.formBuilder.group({
    nombre: ["",[Validators.required]],
    apellido: ["",[Validators.required]],
    email: ["",[Validators.required, Validators.email]],
    telefono: ["",[]],
    contrasena: ["",[Validators.required, Validators.minLength(8)]],
    confirmarContrasena: ["",[Validators.required]]
  },
  { validators: contrasenasIguales }
);

  function contrasenasIguales(control: AbstractControl): ValidationErrors | null {
    const contrasena = control.get('contrasena')?.value;
    const confirmar = control.get('confirmarContrasena')?.value;
    return contrasena === confirmar ? null : { contrasenasNoCoinciden: true };
}

  }


  get Nombre(){
    return this.form.get("nombre");}
  get Apellido(){
    return this.form.get("apellido");}
  get Email(){
    return this.form.get("email");}
  get Telefono(){
    return this.form.get("telefono");}
  get Contrasena(){
    return this.form.get("contrasena");}
  get ConfirmarContrasena(){
    return this.form.get("confirmarContrasena");}
  
  onEnviar(event: Event) {

  event.preventDefault();

  if (this.form.valid) {
    console.log('Formulario valido');
    console.log(this.form.value);
  }
  else {
    this.form.markAllAsTouched();
  }

}
}
import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Juan David';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'Invitarlo',
    'female': 'Invitarla'
  }

  changeClient():void{
    this.name = 'Angie';
    this.gender = 'female'
  }

  // 118n Plural
  public clients: string[] = ['Maria','Pedro','Juan','David','Paula','Laura','Angie','Paola'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': ' tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Juan David',
    age: 22,
    address: 'Barranquilla, Colombia'
  }

  // Async Pipe
  public myObservableTime = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.'),
      console.log('Tenemos data en la promesa.')
    }, 3500);
  })
}

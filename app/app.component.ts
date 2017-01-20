import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Naam: {{name}}</h1>
  	<p><strong>Email:</strong> {{email}}</p>
  	<p><strong> Adres:</strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
  	`,
})

export class AppComponent  { 
	name = 'Mathijs de Bok',
	email = 'mathijs@gmail.com',
	address = {
		street: 'Hester Hoofterf 22',
		city: 'Apeldoorn',
		state: 'Gelderland'
	}
}

import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  	<h1>{{name}}</h1>
  	<p><strong>Email:</strong> {{email}}</p>
  	<p><strong>Adres:</strong> {{address.street}}, {{address.city}}, {{address.state}}</p>
  	<button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  	<div *ngIf="showHobbies">
	  	<h3>Hobbies: </h3>
	  	<ul>
	  		<li *ngFor="let hobby of hobbies; let i = index">
	  			{{hobby}} <button (click)="deleteHobby(i)">X</button>
	  		</li>
	  	</ul>
	  	<form (submit)="addHobby(hobby.value)" >
	  		<label>Add Hobby:</label><br />
			<input type="text" #hobby /><br />
		</form>
	</div>
	<hr />
	<h3>Edit User</h3>
	<form>
		<label>Name:</label><br />
		<input type="text" name="name" [(ngModel)]="name" /><br />
		<label>Email:</label><br />
		<input type="text" name="email" [(ngModel)]="email" /><br />
		<label>Street:</label><br />
		<input type="text" name="address.street" [(ngModel)]="address.street" /><br />
		<label>City:</label><br />
		<input type="text" name="address.city" [(ngModel)]="address.city" /><br />
		<label>State:</label><br />
		<input type="text" name="address.state" [(ngModel)]="address.state" /><br />
	</form>
  	`,
})

export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: strin[];
	showHobbies: boolean;

	constructor() {
		this.name = 'Bokdem',
		this.email = 'mathijs@gmail.com',
		this.address = {
			street: 'Hester Hoofterf 22',
			city: 'Apeldoorn',
			state: 'Gelderland'
		}
		this.hobbies = ['Music', 'Movies', 'Sports'],
		this.showHobbies = false;
	}

	toggleHobbies() {
		if(this.showHobbies == true) {
			this.showHobbies = false;
		} else {
		this.showHobbies = true;
		}
	}

	addHobby(hobby) {
		this.hobbies.push(hobby);
	}

	deleteHobby(i) {
		this.hobbies.splice(i, 1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}
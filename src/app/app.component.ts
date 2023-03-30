import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'my-store';
// }

export class AppComponent {
  name = 'Fran';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Placeholder',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }
  names: String[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += +1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}

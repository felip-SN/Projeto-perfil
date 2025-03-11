import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from "./perfil/perfil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prj-perfil';
}

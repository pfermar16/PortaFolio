// src/app/app.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { Technologies } from './components/technologies/technologies';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterModule,
    Navbar,
    Hero,
    Projects,
    Technologies,
    Footer,
  ],
})
export class App { }

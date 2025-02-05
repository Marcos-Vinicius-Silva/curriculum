import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { inject, Injector } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    // Recuperar o Injector após o bootstrap
    const injector = appRef.injector;

    // Registrar o AppComponent como um Web Component
    const customElement = createCustomElement(AppComponent, { injector });
    customElements.define('curriculum-element', customElement);
  })
  .catch((err) => console.error(err));

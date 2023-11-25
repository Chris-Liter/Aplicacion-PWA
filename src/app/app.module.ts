import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroments } from './enviroments/enviroments';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(enviroments.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: enviroments.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyCsivBEuqWC23okXMJPkW86gEgapVIR_Og',
    authDomain: 'tienda-online-7b9dd.firebaseapp.com',
    databaseURL: 'https://tienda-online-7b9dd-default-rtdb.firebaseio.com',
    projectId: 'tienda-online-7b9dd',
    storageBucket: 'tienda-online-7b9dd.firebasestorage.app',
    messagingSenderId: '73867896348',
    appId: '1:73867896348:web:f5f2b016698b50990b21d9',
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}

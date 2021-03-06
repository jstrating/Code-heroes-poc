import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

interface User {
    uid: string,
    email: string,
    photoURL?: string,
    displayName?: string
}

@Injectable()
export class AuthService {
    user: Observable<User>;
    userId: string;
    userData: Object;

    constructor(private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private db: AngularFireDatabase,
        private router: Router) {
        this.user = this.afAuth.authState.switchMap(user => {
            if (user) {
                this.afs.doc<User>(`users/${user.uid}`).valueChanges().subscribe(data => {
                    console.log(data);
                    return data;
                });
               
            } else {
                return Observable.of(null);
            }
        });

        this.afAuth.authState.do(user => {
            if (user) {
                this.userId = user.uid;
                this.userData = user;
            }
        }).subscribe();
    }


    public googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((credentials) => {
                this.updateUserData(credentials.user);
            });
    }

    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data)
    }

    public logout() {
        this.afAuth.auth.signOut();
        this.userData = null;
        console.log("logout");
    }
}



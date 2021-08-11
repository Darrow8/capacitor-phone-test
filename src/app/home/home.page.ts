import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import {cfaSignInPhone, cfaSignInPhoneOnCodeSent, cfaSignInPhoneOnCodeReceived} from 'capacitor-firebase-auth';
import firebase from 'firebase';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public confirm: FormGroup;
  public verificationId = '';
  private phoneNum = '1112223333'; // * enter your phone number here, no dashes or spaces 

  constructor(private formBuilder: FormBuilder) {
    this.confirm = this.formBuilder.group({
      code: new FormControl('', Validators.compose([Validators.required, Validators.min(3)]))
    });
  }


  ngOnInit() {
    // firebase.initializeApp()
  }


  signInPhone() {

    cfaSignInPhoneOnCodeSent().subscribe(
      {
        next: (verificationId) => {
          console.log('at next cfaSignInPhoneOnCodeSent!');
          this.verificationId = verificationId;
          console.log(verificationId);
        },
        error: (error) => {
          console.log('at error cfaSignInPhoneOnCodeSent!');

          console.log(error);

        },
        complete: () => {
          console.log('at complete cfaSignInPhoneOnCodeSent!');

        }
      }
    );

    alert('testing...');
    cfaSignInPhone(`+1${this.phoneNum}`).subscribe( //! enter your phone number!!
      {
        error: (error) => {
          console.log('at error cfaSignInPhone!');

          console.log(error);

        },
        complete: () => {
          console.log('at complete cfaSignInPhone!');
        }
      }
    );
  }

  async verify(verificationCode: string) {
    console.log(verificationCode);
    const credential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, verificationCode);
    console.log(credential);
    console.log('putting cred into signIn')
    await firebase.auth().signInWithCredential(credential).then((auth) => {

      console.log('done!')
      console.log(auth)


    }).catch((error) => {
      console.log(error);
    });


  }



}

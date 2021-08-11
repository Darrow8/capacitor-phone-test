# capacitor-phone-test
For a long time I was having trouble using the firebase authentication system for phone numbers in ionic + capacitor. 
I got so frustrated I put it on the backburner and made a long post about it on stackoverflow (https://stackoverflow.com/questions/66573679/ionic-capacitor-firebase-phone-number-authentication-problems)
I have finally got it working using the https://github.com/baumblatt/capacitor-firebase-auth library and https://github.com/angular/angularfire library. So thank you to those coders <3 

#How to use

Before you start, it is recommended that you are experienced with ionic, capacitor, and firebase.

1. Create a firebase project and enable phone number authentication. Also make a web api key and ios api key. (Follow this tutorial if you get confused https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md, from step 3 to 7)
(Also follow this tutorial if you get confused on the ios part: https://firebase.google.com/docs/ios/setup)

Make sure you replace the GoogleServices-Info.plist in the ios project and add your firebaseConfig specs in the environment folder

2. Follow this tutorial to sync your APN in firebase https://stackoverflow.com/questions/45091583/invalid-token-when-trying-to-authenticate-phone-number-using-firebase

3. Run `npm install`, then run `ios cap sync`

4. Navigate to your the Xcode .workspace project in ios/App/App.workspace and setup your signing certificate.

5. Connect an iphone to your computer and run the Xcode project on an Iphone

* If your run into a problem, make sure to let me know in the issues section!

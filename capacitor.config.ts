import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.app',
  appName: 'auth-test',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorFirebaseAuth: {
      providers: ['phone'],
      languageCode: 'en',
      nativeAuth: false,
    }
  }
};

export default config;

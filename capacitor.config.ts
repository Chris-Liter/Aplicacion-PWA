import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trabajoMovil.app',
  appName: 'trabajo',
  webDir: 'dist/trabajo',
  server: {
    androidScheme: 'https'
  }
};

export default config;

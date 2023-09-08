import { CapacitorElectronConfig } from "@capacitor-community/electron";

const config: CapacitorElectronConfig = {
  appId: 'io.ionic.starter',
  appName: 'freeCodeCamp-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  electron: {
    splashScreenEnabled: true,
    splashScreenImageName: 'splash.gif'
  }
};

export default config;

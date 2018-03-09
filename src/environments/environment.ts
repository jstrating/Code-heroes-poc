// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA20YR_BvItuW0Xy2IXlEPTPjPjzTQrxrY",
    authDomain: "m4m-code-heroes.firebaseapp.com",
    databaseURL: "https://m4m-code-heroes.firebaseio.com",
    projectId: "m4m-code-heroes",
    storageBucket: "m4m-code-heroes.appspot.com",
    messagingSenderId: "567701438863"
  }
};

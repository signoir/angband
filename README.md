# Angband

- [x] [Angular]
- [x] [Angular Material]
- [x] [flex-layout]
- [x] [gulp]
- [x] [Webpack]
- [x] [TypeScript]
- [x] [@types].
- [x] [angular-webpack-config]
- [x] [Dll Bundle]
- [x] [Hard Source]
- [x] [webpack-hot-middleware]
- [x] Development, staging and production modes.
- [x] [AoT compilation]
- [x] [@ngtools/webpack]
- [ ] [UglifyJS Webpack Plugin]
- [x] [SCSS]
- [x] [stylelint-config-standard]
- [x] [stylelint]
- [x] [TransferState]
- [x] [Lazy loading]
- [x] [ngrx/store]
- [x] [ngx-config]
- [x] [ngx-auth]
- [x] [ngx-cache]
- [x] [ngx-translate]
- [x] [ngx-meta]
- [ ] [ngx-i18n-router]
- [x] [ngx-perfect-scrollbar]
- [x] [angulartics2]
- [x] [Jest]
- [x] [Nightmare]
- [x] [CircleCI]
- [x] [angular-tslint-rules]
- [x] [TSLint]
- [x] [codelyzer]

> Built with `Angular v6.x.x`, bundled with `gulp v4` and `webpack v3`.

### CLI

```
# install dependencies
$ yarn

# clean artifacts & DLL cache
$ npm run clean

# run tslint
$ npm run lint

# run unit tests
$ npm test

# run e2e tests
$ npm run e2e

# dev build
$ npm run build:spa-dev
# OR
$ npm run build:universal-dev

# stage build
$ npm run build:spa-stage
# OR
$ npm run build:universal-stage

# prod build
$ npm run build:spa-prod
# OR
$ npm run build:universal-prod

# start the server (lean Angular)
$ npm run serve:spa

# start the server (lean Angular w/HMR support)
$ npm run serve:spa-hmr

# start the server (Angular Universal)
$ npm run serve

# watch mode (build, and then HMR and test watch)
$ npm run serve:watch
```

Navigate to `http://localhost:1337` for **lean Angular** (*client-side rendering*) and `http://localhost:8000` for **Angular
Universal** (*server-side rendering*) in your browser


[Angular]: https://angular.io
[Angular Material]: https://material.angular.io
[flex-layout]: https://github.com/angular/flex-layout
[gulp]: http://gulpjs.com
[Webpack]: http://webpack.github.io
[TypeScript]: http://www.typescriptlang.org
[angular-webpack-config]: https://github.com/ng-seed/angular-webpack-config
[@types]: https://www.npmjs.com/~types
[Dll Bundle]: https://github.com/shlomiassaf/webpack-dll-bundles-plugin
[Hard Source]: https://github.com/mzgoddard/hard-source-webpack-plugin
[webpack-hot-middleware]: https://github.com/glenjamin/webpack-hot-middleware
[AoT compilation]: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
[@ngtools/webpack]: https://www.npmjs.com/package/@ngtools/webpack
[UglifyJS Webpack Plugin]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
[SCSS]: http://sass-lang.com
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint]: https://stylelint.io/ 
[Lazy loading]: https://angular-2-training-book.rangle.io/handout/modules/lazy-loading-module.html
[TransferState]: https://angular.io/api/platform-browser/TransferState
[ngrx/store]: https://github.com/ngrx/store
[ngx-config]: https://github.com/fulls1z3/ngx-config
[ngx-auth]:  https://github.com/fulls1z3/ngx-auth
[ngx-cache]: https://github.com/fulls1z3/ngx-cache
[ngx-translate]: https://github.com/ngx-translate/core
[ngx-meta]: https://github.com/fulls1z3/ngx-meta
[ngx-i18n-router]: https://github.com/fulls1z3/ngx-i18n-router
[ngx-perfect-scrollbar]: https://github.com/zefoy/ngx-perfect-scrollbar
[angulartics2]: https://github.com/angulartics/angulartics2
[Jest]: https://facebook.github.io/jest
[Nightmare]: https://github.com/segmentio/nightmare
[CircleCI]: https://circleci.com
[angular-tslint-rules]: https://github.com/ng-seed/angular-tslint-rules
[TSLint]: https://github.com/palantir/tslint
[codelyzer]: https://github.com/mgechev/codelyzer

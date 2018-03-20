# my-company-frontend

This **frontend** application/s is a mono-repo version of the [lab (multi-repo version)](http://ivans-innovation-lab.github.io/), and represents its predecessor. It conusumes a [REST API](https://github.com/ivans-innovation-lab-monorepos/my-company-backend).

![Monorepo](https://github.com/ivans-innovation-lab-monorepos/my-company-backend/raw/master/monorepo.png)


Instead of having a large monolith, we have dozens of small libraries with well-defined public APIs (and an [Nx Workspace](https://nrwl.io/nx/why-a-workspace) ensures you only use your libraries’ public APIs).

At this stage we have one deployment pipeline for all applications and libraries together.

## Benefits

- Unified versioning
   - Everything at that current commit works together
- Promotes code sharing and reuse
   - Easy to split code into lib modules
   - Easy to consume/implement that code and the latest changes to it
- Easier dependency management
   - One node_modules for all code
   - One build setup (like the AngularCLI)
- Refactoring benefits
   - Code editors and IDEs are "workspace" aware
   - Can have a single commit for a refactor that spans applications in the domain
- Consistent developer experience
   - Ensures all necessary dependant code is available

## Drawbacks

- Takes work to try and limit access to parts of the code base
- An upgrade to a lib requires a change to all implementors (can't roll out different versions side by side)
- Can lead to accepted dependencies, making it overkill to work on a small feature
  - Say some library code is designed to hit the web service, in a single workspace you know the service is available so effort might not be made to be able to run that library code with a mock service
  
## Running instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

### Quick Start & Documentation

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)


### Development server

Run `ng serve --app=my-company-ui` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name --app=my-company-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build --app=my-company-ui` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## References and further reading

- https://nrwl.io/nx/why-a-workspace
- https://blog.nrwl.io/nrwl-nx-an-open-source-toolkit-for-enterprise-angular-applications-38698e94d65


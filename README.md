# my-company-frontend [![CircleCI](https://circleci.com/gh/ivans-innovation-lab-monorepos/my-company-frontend.svg?style=svg)](https://circleci.com/gh/ivans-innovation-lab-monorepos/my-company-frontend)

This **frontend** application/s is a mono-repo version of the [lab (multi-repo version)](http://ivans-innovation-lab.github.io/), and represents its predecessor. It conusumes a [REST API (Java, Spring Boot, Eventsourcing, CQRS)](https://github.com/ivans-innovation-lab-monorepos/my-company-backend), and enables you to manage blog posts, projects and teams of a 'fictitious' company.

![Monorepo](https://github.com/ivans-innovation-lab-monorepos/my-company-backend/raw/master/monorepo.png)


Instead of having a large monolith, we have dozens of small [libraries](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/tree/master/libs) with well-defined public APIs (and an [Nx Workspace](https://nrwl.io/nx/why-a-workspace) ensures you only use your libraries’ public APIs). [The libraries](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/tree/master/libs) are hosting Angular modules most of the time.

At this stage we have one [deployment pipeline](https://circleci.com/gh/ivans-innovation-lab-monorepos/my-company-frontend) for all applications and libraries together.

## Benefits of monorepo

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

## Drawbacks of monorepo

- Takes work to try and limit access to parts of the code base
- An upgrade to a lib requires a change to all implementors (can't roll out different versions side by side)
- Can lead to accepted dependencies, making it overkill to work on a small feature
  - Say some library code is designed to hit the web service, in a single workspace you know the service is available so effort might not be made to be able to run that library code with a mock service

## Architecture overview

### Feature Components vs Presentational Components

Feature and Presentational Component Design pattern has been called many things such as:

 - Container Components vs Presentational Components
 - Smart/Dumb Components
 - Stateful/Stateless Components
 
#### Feature components

A **Feature component** is a top level component that contains all other components in our feature. Our feature components are organized and packaged into modules(ex. [`blog.module`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/blog/src/blog.module.ts)), but they are not exported for use on templates of other modules. They are rather used as a **routed components**. 

Feature components are responsible for gathering data from various services for our feature to use. If our user saves data the feature component is responsible to pass that data to our Angular Services to save the data to our server API. Feature components are very slim with the amount of application logic. We try to defer this logic to Services if possible. For this example the [`blog.component`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/blog/src/blog.component.ts) is our Feature Component and **it is composed of many Presentational components**.

#### Presentational components

**Presentational Components behave like pure functions** taking in the data via @Input and emitting data via @Output. This allows the majority of our UI to not know the underlying implementation detail of where the data came from. For example a [`side-item.component`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/presentational-components/src/side-menu-item/side-menu-item.component.ts) takes in a @Input of an item to display. This allows the `side-item.component` component to have the only responsibility of rendering the item when the data is passed to it.

Many if not **most Presentational Components can be abstracted into a style guide or UI library** for the project. Using a shared style guide for an organization or project improves reusability, increases the consistency between the different views that form a web application and encourages the communication between the different teams. It can also ensure that a unified brand is used across different products. To get ideas of component design and style guide maintainability I recommend Brad Frost’s book [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

There are downsides to this though. As the feature grows in complexity we may have a deeply nested component structure. Since presentation component events only bubble up one level at a time we will have to manually pass up to each parent component. **Introducing other sub feature components** ([`blog-list.component`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/blog/src/blog-list/blog-list.component.ts), [`blog-detail.component`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/blog/src/blog-detail/blog-detail.component.ts), [`blog-new.component`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/blog/src/blog-new/blog-new.component.ts) can help elevate this. The communication between feature components is event driven, and enables loose coupling. For example a `blog-new.component` will trigger an event on successfull creation of a blog post, and `blog-list.component` is subscribed to it so it can re-fetch  and refresh a list of blog posts.

Let's place components into a layout and articulate the design’s underlying content structure:

##### Home template

![My Company - Home](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Home.png)

##### Blog post detail 'template'

![My Company - Blog](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Blog.png)

### Theming our custom presentational components

Our application supports use of potentially unlimited number of [different themes](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/apps/my-company-ui/src/styles/_theme.scss). This is useful in itself but these themes will only style components provided by the Angular Material library itself.

We put our general layout and styling to the [`main-list-blog.component.scss`](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/libs/presentational-components/src/main-list-blog/_main-list-blog.component.theme.scss), but we also create a new file [`main-list-blog.component.theme.scss`](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/app/presentational-components/main-list-blog/main-list-blog.component.scss) where we are using style rules which have something to do with the color. In our mixin, we retrieved all the necessary theme variables needed for the styling of our custom component.

To use our custom component theme, we have to include it in the application [styles.scss](https://github.com/ivans-innovation-lab-monorepos/my-company-frontend/blob/master/apps/my-company-ui/src/styles/styles.scss) file.

  
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


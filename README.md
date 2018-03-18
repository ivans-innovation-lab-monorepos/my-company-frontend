# my-company-frontend
My Company Frontend - MonoRepo

This **frontend** application/s is a mono-repo version of the [lab (multi-repo version)](http://ivans-innovation-lab.github.io/), and represents its predecessor. It conusumes a [REST API](https://github.com/ivans-innovation-lab-monorepos/my-company-backend).

![Monorepo](https://github.com/ivans-innovation-lab-monorepos/my-company-backend/raw/master/monorepo.png)


Instead of having a large monolith, we have dozens of small libraries with well-defined public APIs (and an [Nx Workspace](https://nrwl.io/nx/why-a-workspace) ensures you only use your libraries’ public APIs).

You can develop and test these libraries independently. If at one point you want to extract a library into a separate repository, you can do it in minutes. 

## Benefits

- Unified versioning
   - Everything at that current commit works together
   - A label or branch can capture the same
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


## References and further reading

- https://nrwl.io/nx/why-a-workspace
- https://blog.nrwl.io/nrwl-nx-an-open-source-toolkit-for-enterprise-angular-applications-38698e94d65


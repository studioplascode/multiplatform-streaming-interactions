# Conventions for this Project

## Git branching strategy

### How and when to create branches 

We have two long-running branches:
- `main` - reflects production
- `dev` - staged for production

New featues should always be implemented in a new branch, created from `dev`:
```mermaid
    gitGraph
      commit id: "origin"
      branch dev
      commit id: "current changes in dev"
      branch cool-feature-branch
      commit id: "your feature - raw"
```

Once you think the feature is ready, create a pull request to merge back into `dev`
```mermaid
    gitGraph
      commit id: "origin"
      branch dev
      commit id: "current changes in dev"
      branch cool-feature-branch
      commit id: "your feature - raw"
      commit id: "your feature - refined"
      commit id: "your feature - ready"
      checkout dev
      merge cool-feature-branch
```
Cool, the feature is now staged for production. Once enough new featues accumulate to justify a release, a release branch will be created from `dev` where extensive testing will take place:
```mermaid
    gitGraph
      branch dev
      commit id: "dev + your feature"
      branch other-cool-feature
      commit id: "other feature - ready"
      checkout dev
      merge other-cool-feature
      commit id: "ready for release"
      branch release-x
      commit id: "lots of testing"
```
After ensuring everything works, and potentially lots of bug fixes, the release will be merged into the main branch:
```mermaid
    gitGraph
      commit id: "origin"
      branch dev
      commit id: "dev + your feature"
      branch other-cool-feature
      commit id: "other feature - ready"
      checkout dev
      merge other-cool-feature
      commit id: "ready for release"
      branch release-x
      commit id: "lots of testing"
      branch release-x-bugfix-very-bad-bug
      commit id: "fixes bad bug"
      checkout release-x
      merge release-x-bugfix-very-bad-bug
      commit id: "test again"
      checkout main
      merge release-x
```

**For large features it might be better to even use sub-feature branches created from the feature branch.**

### Naming branches
- all lower case words
- devided by `-`

> example:
> `youtube-superchat-overlay`

## Eternal fight over naming things
#### Variables
Just use [camel-case](https://www.techtarget.com/whatis/definition/CamelCase#:~:text=CamelCase%20is%20a%20popular%20convention,naming%20conventions%20within%20an%20organization.)

#### Functions
- Use camel-case as well
- Normal Function start with a lower case letter
- React components start with an upper case letter

## Test / Code Coverage
- Write test in jest
- Try to cover as much as possible


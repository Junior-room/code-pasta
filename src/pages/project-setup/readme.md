---
title: hook - useDebounce
description: useDebounce - debounce your callback
layout: ../../layouts/SnippetPageLayout.astro
---

# Readme.md

Sometimes you don't have time for write some good readme for project, or you don't know how to write good README.md file (ours example is only example, you can start with this structure and add something yours or project specific stuff).

## Example
```md
# [Project Name]

### Navigation

- [Project Description](#project-description)
- [Environments and links](#environments-and-links)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
- [Project Management](#project-management)
- [Workflow](#workflow)
- [Project Code Conventions and Choices](#project-code-conventions-and-choices)

## Project Description

### Business objectives of this project

[business description]

## Environments and links

[Here can positioned links on board/figma or environments (production/stage)]

[Link](https://example.com)\
[Link 2](https://example.com)

## Technologies

### Used technologies:

[used technologies]

- [Link](https://example.com/) [And mb some description why use is].

example:

- [TypeScript](https://www.typescriptlang.org/) for static type safety and ease of development, documenting and extending functionality

#### Libraries:

[used libs]

- [Link](https://example.ocm) - [what problem should is solve]

example:

- [Husky](https://typicode.github.io/husky/) - use husky pre-commit hook implemented to keep our code clean

## Project Setup

[steps how to launch project on our machine]

example:

1. Clone repo from Github

- Clone the repositories from [Link](https://example.com)
- Create .env file based on env.example
  - and ask about that with your Team Leader.

2. Make sure you have installed all:

```
- YARN
- NODE
```

3. Install dependencies in the root directory: `yarn install`
4. Serve the project by `yarn serve`
5. Open `localhost:8080`

## Project management:

[description how project is managed]

#### Board

Main source of truth for the work progress and what is being/has been done:

- All task what need to do you can find in [Board](https://board.exmple.com),

#### Communication:

[information about how you communicate on project]

## Workflow

[description of the project workflow]

### Branches

[description about branches]

example:

Use dev as a main branch from which you create a feature, bugfix or any other branch you need to complete task.
When creating branch us following naming convention:

`[prefix]-[taks-id]-[description]`

#### Prefixes

- `ft` - feature
- `rf` - refactor
- `bf` - bug fixes
- `hf` - A hotfix
- `td` - technical debt

Example: **ft-in-23-section**

### Naming of the commits

commit prefixes

- `ft` - feature
- `rf` - refactor
- `bf` - bug fixes
- `hf` - A hotfix
- `td` - technical debt

`[prefix]-[description]`

Please be aware of that commits are not only for you but also for other developers, and they should tell us something spamming `fix`, `fix`, `fix` won't fix your code

Examples:

- **'ft: create cool stuff'** and **'rf: make my solution more clean'**

### Naming of the MR

`[prefix][description]`
prefix - is an Upper Cased id of task from Board
Example: **[IN-25] Do Something Cool**

## Project Code Conventions and Choices

[some conventions that you and your team design to use]

example:

### Clean code

When writing anything, keep in mind what good, clean code is all about - we want this project to be easy to debug or extend in the future. That means we want it to read like English language - just reading names and language/library specific keywords should be enough for us to imagine _what_ is going on under the hood. We don't want short, 'cleaver' code. We want SMART and EASY TO READ code. This is especially important when it comes to naming functions/variables. Instead of 'mapAcc2UsrAddrVal' call a function 'getUserAddress' and type it's parameter as 'UserAccount'. This is only an example - use common sense and try to be smart, not cleaver :)

Also, before you commit your code, read it. Go through all changes you've made and make sure **all** of them are necessary. Remember: Good code isn't the code you cannot _add_ anything to. Good code is the code you cannot remove anything _from_.

### Conventions


### Supported browsers

We focus on supporting most used internet browsers and their mostly recent releases (last 2-3 versions). This means we target: Edge, FireFox, Chrome, Safari, Opera. When in doubt, always take a look at [can i use](https://caniuse.com)

```

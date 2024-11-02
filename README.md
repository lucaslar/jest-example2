# jest-example2

Demo repository for first steps in a Node.js project using the Jest testing framework.  
(HTW Berlin / WebTech)

## Repository Structure

### General Structure of a Node.js Project
- `package.json` contains project information and the list of (dev-)dependencies we use.
- `package-lock.json` contains the exact dependency tree and is generated automatically.
- `node_modules` (gitignored directory) contains our installed libraries (and their dependencies).

### Jest/Example-Specific Files
- `example.js` contains logic, specifically the `plus` and `oddNumbersOnly` functions.
- `example.test.js` contains tests for the functions in `example.js`.
- `.babelrc` is the configuration file for Babel, a transpiler used to ensure compatibility between JavaScript versions.

## First Steps with npm

### Installing a Dependency

**Use case:** _I_ want to add a new library to the project.

```shell
npm install <library name>
```

Short form:
```shell
npm i <library name>
```

### Installing All Dependencies

Use case: I want to install all libraries used in this project, for example, because I just pulled and _someone else_ added new dependencies.

If `package-lock.json` exists, it’s recommended to perform a clean install of the exact dependency tree:

```shell
npm ci
```

To update dependencies:

```shell
npm install
# or short: npm i
```

### Running Scripts
In this repository, there is only a `test` script available (see `scripts` in `package.json`).
To run it:

```shell
npm test
```

## Recommendation: Prettier

This project also uses _Prettier_ for automatic code formatting.
Prettier’s formatting configuration is defined in the prettier section of package.json.

Using Prettier helps avoid formatting issues, such as:

- Alice commits 100 lines of code with two spaces for indentation.
- Bob changes a typo in Alice's code, but his IDE uses 4 spaces for indentation, resulting in a commit with unintended changes to 100 lines of code.
- When Alice makes further changes, the indentation would revert back to 2 spaces. 

&rarr; With Prettier, this problem is avoided since Alice and Bob follow a consistent, automatically applied formatting style.

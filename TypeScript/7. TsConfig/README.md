# What's a TS Config?
It's a JSON file in which we define the TypeScript configuration of a project.

To generate it, we need to execute the command `tsc --init` in the root of the project.

Some of the most important properties of `compilerOptions` in the `tsconfig.json` file are:
- `target`: Specifies the ECMAScript version for compiling.
- `module`: 
- `outDir`: Specifies the directory in which the JS files output are going to be stored.
- `outFile`: Joins all our files into a single one.
- `lib`:
- `allowJs`: Specifies whether JS code can be compiled along with TS files.
- `checkJs`: Enables error reporting in type-checked JavaScript files. `allowJs` needs to be set to `true`.
- `declaration`: Generates a `.d.ts` file which lists all declarations of our project in order to make our code more clear to other developers. `d` stands for `declaration`.
- `rootDir`: Indicates the path of the project's `.ts` files.
- `noEmit`: True if we don't want to be notified by code errors.
- `noImplicitAny`: True if we want to raise an error when not typing variables, which would lead into an `any` variable.
- `strictNullChecks`: True if we want to be notified when trying to accessing null values. For example, if we try to access the value of an nonexistent property of an object.
- `alwaysStrict`: True if we want to compile our code with the `use strict` directive of JS.

There are more root properties such as `include` and `exclude`:
- `include`: Lists all the files to be compiled. E.g. `include: ["src/**/*"]`.
- `exclude`: Lists all the files to be excluded for compilation. E.g. `exclude: ["node_modules", "**/*.spec.ts"]`.

More details [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
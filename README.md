# Project Documentation

This documentation provides an overview of the files and folders in the project, along with instructions on how to navigate through them. It also includes information on how to use Yarn and Expo with TypeScript.

## File Structure

The project follows the following file structure:

```
- src
  - components
  - screens
  - utils
- navigation
- yarn.lock
- package.json
- tsconfig.json
- app.json
```

### `src` Folder

The `src` folder contains the main source code of the project. It is further divided into the following subfolders:

- `components`: This folder contains reusable components used throughout the application.
- `screens`: This folder contains the different screens or pages of the application.
- `utils`: This folder contains utility functions and helper classes.

### `navigation` Folder

The `navigation` folder contains the navigation logic of the application. It includes the configuration for routing and navigation between screens.

### `yarn.lock` and `package.json`

These files are used for managing dependencies and package versions. `yarn.lock` ensures that the same versions of packages are installed across different environments, while `package.json` lists all the dependencies required for the project.

### `tsconfig.json`

The `tsconfig.json` file is the TypeScript configuration file. It specifies the compiler options and settings for the project.

### `app.json`

The `app.json` file contains the configuration for the Expo project. It includes settings such as the app name, version, and other metadata.

## Yarn and Expo with TypeScript

To use Yarn and Expo with TypeScript in this project, follow these steps:

1. Install Yarn globally on your machine if you haven't already.
2. Navigate to the project root directory in your terminal.
3. Run `yarn install` to install all the project dependencies listed in `package.json`.
4. Once the dependencies are installed, you can start the Expo development server by running `yarn start`.
5. The development server will open in your default browser, and you can use the Expo app on your mobile device to scan the QR code and view the app.

That's it! You are now ready to develop and test the project using Yarn, Expo, and TypeScript.

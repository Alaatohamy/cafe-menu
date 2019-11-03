# cafe-menu

You can find deployed version now on Heroku server on this [Link](https://cafe-menu.herokuapp.com/).
This web application is a list of restaurant/cafe menu items.
You can add, edit delete item to this list menu items.

## Info about this project

- Use the latest version of React 16.10. Use the new React Hooks feature: https://reactjs.org/docs/hooks-intro.html
- Implement the basic 'menu list' and 'add menu item' form.
- Use hosted backend database (that have free plans) https://firebase.google.com/ (Cloud Firestore database).
- When a menu item is created, save it to the database.
- When the browser is reloaded, load the menu list from the database.
- Add Edit and Delete buttons and functionality.
- Use S3 bucket to handle the menu images and async them with firestore data.
  - Uploading image.
  - Get images.
  - Delete image.
  - Update image.
- Use "s3:DeleteObject", "s3:GetObject" to handle these actions:
  - get private image from s3 bucket.
  - delete private image from s3 bucket.
  - update private image from s3 bucket.
- Use Nodejs server to work as proxy to handel private configurations of aws s3.
- use Streaming multer storage engine for AWS S3 (multer-s3).
- use node.js middleware for handling multipart/form-data, which is primarily used for uploading files (multer).
- Use aws ask to access data in private bucket and set aws configurations (aws-sdk).
- Handle loading state on these actions:
  - Get all items from firestore and there images accordingly from aws s3 bucket.
  - Delete menu item data fro firestore and its image from aws s3 bucket.
  - Get one item data on edit form from firestore and its image from aws s3 bucket.
- Disable buttons on these states:
  - After one click on submit button of edit and Create new item form (save item), and adding loading cursor.

### Todo list

- Display errors when it occurs instead of console it.
- Check better solutions for performance.
- Dockerizing the app.
- Testing all logic functions with jest.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

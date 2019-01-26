# Adrianna Tan Todo List Notes

As I worked along with the wireframes given, I made a few changes that I would like to justify here. Thanks in advance for reading!

## "NEW TASKS"

I chose to remove the New Task section because it seemed contradictory to not exist in the "All Tasks" section. From a UX perspective I understood that it existed as a clear confirmation of the user's added task, so I retained the same effect by setting the default sort to Newest todos. In this way, the newest todo will always exist at the top of the list unless otherwise specified.

## SORT CATEGORIES

As explained above, the default sort category is Newest. The other categories are Oldest, Date Due (Ascending), and Date Due (Descending). Date Due (Ascending) and Date Due (Descending) list the todos without dates at the top of the list to allow the user an easier experience with completing the unfinished task of setting a due date.

This also provides flexibility as the list does not require the user to set a due date.

## SETTING THE DUE DATE

I used AirBnB's react-dates for the due date picker as to not reinvent the wheel. The user is unable to set due dates before the current day.

## COMPONENTS

TodoList and Todo maintain state for UI purposes (focus, dropdowns, etc.)

## MOVING FORWARD

The app does not store any of the data so the app will start over upon refresh. Given the time constraint of a few hours, this was a feature that I did not choose to implement.

Completed tasks are arranged in order of their creation dates. With more time, I would have allowed the user to sort these as well, similar to the sort in All Tasks.






# Redux Todos Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

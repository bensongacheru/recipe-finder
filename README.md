# Recipe Finder App

## Overview

The Recipe Finder App is a React application that allows users to search for recipes, view detailed information about selected meals, and manage a list of favorite recipes. The app supports user authentication using Firebase, including sign-up, log-in, and password reset functionalities.

## Features

- **Search for Recipes**: Users can search for recipes based on a search term.
- **Meal Details**: Users can view detailed information about each meal, including ingredients and instructions.
- **Favourites**: Users can add meals to their favorites list and toggle the visibility of this list.
- **User Authentication**: Users can sign up, log in, and log out. Forgotten passwords can be reset via email.

## Tech Stack

- **Frontend**: React
- **Backend**: The Meal Database API
- **Authentication**: Firebase Authentication
- **State Management**: React hooks (`useState`, `useEffect`, `useCallback`)
- **HTTP Requests**: Axios

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/recipe-finder-app.git
    cd recipe-finder-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to the `firebaseConfig.js` file.

4. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

1. **Search for Recipes**: Use the search bar to find recipes by entering keywords.
2. **View Meal Details**: Click on a meal card to see detailed information about the selected meal.
3. **Add to Favourites**: Click on "Add to Favourites" button on a meal card to save it to your favorites list.
4. **Manage Favourites**: Click "Show Favourites" to view your saved favorite recipes and toggle to hide them.
5. **User Authentication**:
   - **Sign Up**: Create a new account with email and password.
   - **Log In**: Access your account using your email and password.
   - **Log Out**: Sign out from your account.
   - **Reset Password**: Request a password reset email if you've forgotten your password.

## Components

- **App**: Main application component that handles state and rendering of other components.
- **MealCard**: Displays a brief view of a meal with an option to add to favorites.
- **MealDetail**: Shows detailed information about a selected meal.
- **SearchBar**: Input component for searching recipes.
- **Favourites**: Displays a list of favorite meals.
- **SignUpModal**: Modal for user sign-up.
- **Login**: Component for user log-in with an option to reset the password.
- **ResetPassword**: Modal for resetting the user's password.

## Contributing

If you'd like to contribute to the development of this app, please fork the repository, make your changes, and submit a pull request. We welcome improvements and bug fixes!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Meal Database API**: For providing the meal data.
- **Firebase**: For authentication services.

---

# Namasthe GPT 

## Project Overview
**Namasthe GPT** is a modern React application inspired by Netflix, integrating GPT-based movie suggestions and multilingual support. The app combines a visually appealing UI with seamless user authentication and an intelligent movie recommendation system powered by external APIs.



## Features
### Authentication
- **Login/Sign Up**:
  - User-friendly forms for signing up and logging in.
  - Form validation for better user experience.
  - Redirects:
    - Logged-in users are directed to the **Browse Page**.
    - Unauthenticated users are redirected to the **Login Page**.

### Browse Page (After Authentication)
- **Header**: Includes navigation links for browsing and GPT features.
- **Main Movie Section**:
  - Movie trailer auto-plays in the background (muted by default).
  - Displays movie title and description for the current selection.
  - **Movie Suggestions**:
    - Dynamically generated lists of movies categorized by genre or theme.
    - Custom hooks for fetching and displaying now-playing movies.
- **Movie Details**:
  - Each movie card provides a full overview, including trailers and descriptions.
  
### GPT Features
- **GPT Search Page**:
  - Integrated multilingual GPT search functionality.
  - Movie suggestions based on user queries.
  - **Gemini API Integration**:
    - Real-time search feature initialized.
  - Custom hooks for movie categories and suggestions.

### Movie List & Cards
- Designed to display multiple categories (e.g., Trending, Top Rated).
- Individual movie cards showcase essential details and allow exploration of additional information.

---

## Implementation Details
### Setup
1. **Create React App**:
   - Initialize a new React project with `create-react-app`.
2. **Firebase Setup**:
   - Configure Firebase for user authentication and database storage.
   - Environment variables stored in `.env` files for sensitive data.
3. **Routing**:
   - React Router for navigation between login, signup, and browse pages.

### Authentication Features
- Firebase authentication:
  - User sign-up with display name and profile picture updates.
  - Sign-in functionality with secure user session management.
- Redux store:
  - **userSlice** for managing authentication states.
- Automatic redirection:
  - Ensures seamless user experience by protecting routes for logged-in and logged-out users.

### Movie Data Integration
- **TMDb API**:
  - Registered the app and integrated the API for fetching movie data.
  - Custom hooks for fetching now-playing movies and other categories.
  - Movie trailers fetched and displayed in the main container.
  
### GPT Features
- Developed a dedicated GPT page for search functionality.
- Integrated multilingual support to enhance the GPT search experience.
- Enhanced search experience using **Gemini API**.

---

## Deployment
- The application is deployed using a cloud-based service (e.g., Firebase Hosting or Vercel).
- Environment variables are securely managed in `.env` files.

---

## Usage Guide
### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/namasthe-gpt.git
   cd namasthe-gpt
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure `.env`:
   - Add Firebase and TMDb API keys.
4. Start the development server:
   ```bash
   npm start
   ```

### Deployment
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy using your preferred hosting service:
   ```bash
   firebase deploy
   ```

---

## Key Components
1. **Header**:
   - Contains navigation for browsing and GPT features.
2. **MainContainer**:
   - Displays the main movie trailer and description.
3. **MovieCard**:
   - Shows individual movie details with title, poster, and overview.
4. **GPT Page**:
   - Multilingual search bar powered by Gemini API.

---

## Bug Fixes
- Resolved display name and profile picture updates during sign-up.
- Fixed routing issues to ensure proper redirection based on authentication status.
- Unsubscribed `onAuthStateChanged` callback to optimize performance.

---

## Future Enhancements
- Enhanced GPT capabilities for advanced movie recommendations.
- Improved UI/UX with animations and interactive components.
- Addition of user settings for customized preferences.

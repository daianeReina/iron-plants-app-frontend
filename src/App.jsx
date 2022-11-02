import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePageEdit from "./pages/ProfilePageEdit/ProfilePageEdit";
import ProfilePageEditPassword from "./pages/ProfilePageEditPassword/ProfilePageEditPassword";
import ProfilePageDeleteAccount from "./pages/ProfilePageDeleteAccount/ProfilePageDeleteAccount";

import PlantsPage from "./pages/PlantsPage/PlantsPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <ProfilePageEdit />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit-password"
          element={
            <IsPrivate>
              <ProfilePageEditPassword />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/delete-account"
          element={
            <IsPrivate>
              <ProfilePageDeleteAccount />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/plants"
          element={
            <IsAnon>
              <PlantsPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

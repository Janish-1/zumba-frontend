import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/home-page";
import ProfileAbout from "./pages/profile-about";
import LIveSession from "./pages/l-ive-session";
import Notification1 from "./pages/notification1";
import Subscription from "./pages/subscription";
import Premium from "./pages/premium";
import ForgetPassword from "./pages/forget-password";
import ForgetPassword1 from "./pages/forget-password1";
import ForgetPassword2 from "./pages/forget-password2";
import SignUpPage from "./pages/sign-up-page";
import LogInPage from "./pages/log-in-page";
import WelcomeScreen from "./pages/welcome-screen";
import Explore from "./pages/explore";
import Workout from "./pages/workout";
import Exercises from "./pages/exercises";
import StartPage from "./pages/start-page";
import VideoApp from "./pages/VideoPlay";
import Luckydraw from "./pages/luckydraw";
import ProfileMain from "./pages/profile-main";
import AllWorkouts from "./pages/allWorkouts";
import Sidebar from "./components/sidebar";
import PrivateRoutes from "./pages/PrivateRoute";
import EditProfile from "./pages/editProfile";
import Transaction from "./pages/transaction";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Privacy from "./pages/privacy";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-about":
        title = "";
        metaDescription = "";
        break;
      case "/live-session":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
      case "/subscription":
        title = "";
        metaDescription = "";
        break;
      case "/premium":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password-3":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password-2":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password-1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-screen":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/profile-main":
        title = "";
        metaDescription = "";
        break;
      case "/workout":
        title = "";
        metaDescription = "";
        break;
      case "/exercises":
        title = "";
        metaDescription = "";
        break;
      case "/start-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/welcome-screen" element={<WelcomeScreen />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/log-in-page" element={<LogInPage />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/forget-password-1" element={<ForgetPassword1 />} />
      <Route path="/forget-password-2" element={<ForgetPassword2 />} />
      <Route element={<PrivateRoutes />} >
        <Route element={<HomePage />} path='/' exact />
        <Route element={<ProfileMain />} path='/profile-main' />
        <Route path="/profile-about" element={<ProfileAbout />} />
        <Route path="/live-session" element={<LIveSession />} />
        <Route path="/notification" element={<Notification1 />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile-main" element={<ProfileMain />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/exercises/:id" element={<Exercises />} />
        <Route path="/start-page" element={<StartPage />} />
        <Route path="/video" element={<VideoApp />} />
        <Route path="/luckydraw" element={<Luckydraw />} />
        <Route path="/allworkouts" element={<AllWorkouts />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/privacy" element={<Privacy />} />
    
      </Route>
    </Routes>
  );
}
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import Comments from "./comments/comments";
import {
  AddTicket,
  AllTickets,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-tickets" element={<AllTickets />} />
            <Route path="add-ticket" element={<AddTicket />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
          <Route path="/comments" element={<Comments currentUserId="1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

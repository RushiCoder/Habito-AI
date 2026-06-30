import { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";


const Habits = lazy(() => import("./pages/Habits.jsx"));
const Weekly = lazy(() => import("./pages/Weekly.jsx"));
const Insights = lazy(() => import("./pages/Insights.jsx"));
const Stats = lazy(() => import("./pages/Stats.jsx"));


import AppLayout from "./components/AppLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

       <Route
    path="/habits"
    element={
      <Suspense fallback={<LoadingSpinner full />}>
        <Habits />
      </Suspense>
    }
  />

         <Route
    path="/weekly"
    element={
      <Suspense fallback={<LoadingSpinner full />}>
        <Weekly />
      </Suspense>
    }
  />

       <Route
    path="/insights"
    element={
      <Suspense fallback={<LoadingSpinner full />}>
        <Insights />
      </Suspense>
    }
  />

        <Route
    path="/stats"
    element={
      <Suspense fallback={<LoadingSpinner full />}>
        <Stats />
      </Suspense>
    }
  />
</Route>


      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

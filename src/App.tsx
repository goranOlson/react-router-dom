import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider } from "react-router-dom";

// Root layout
import { RootLayout } from "./components/RootLayout";

// Pages as part of RootLayout
import { LandingPage } from "./pages/LandingPage";
import { SearchPage } from "./pages/SearchPage";
import { AboutPage } from "./pages/AboutPage";

export function App() {
// 
const router = createBrowserRouter(
createRoutesFromElements(
<Route>
 <Route path="/" element={<RootLayout />}>
   <Route index element={<LandingPage />} />
   <Route path="/search" element={<SearchPage query={ "Volvo" } />}  />
   <Route path="/about" element={<AboutPage />}  />
 </Route>
</Route>
)
);

return (
<>
<RouterProvider router={router} />
</>
);
}

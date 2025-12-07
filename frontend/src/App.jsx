import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}> </Route>
        <Route path= "/article/:id" element={<ArticleDetail/>}> </Route>  
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router"
import { Contact, Home } from "./pages"


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} /> 
                <Route path="contact" element={<Contact />} /> 
            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Product from "./components/Product";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import { Users } from "./components/Users";
import { UserDetail } from "./components/UserDetail";
import { Admins } from "./components/Admins";
const LazyAbout = React.lazy(() => import("./components/About"))

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={
                    <React.Suspense fallback={<>Loading...</>}>
                        <LazyAbout />
                    </React.Suspense>} />
                <Route path="order-summary" element={<OrderSummary />} />
                <Route path="product" element={<Product />}>
                    <Route index element={<FeaturedProducts />} />
                    <Route path="featured" element={<FeaturedProducts />} />
                    <Route path="new" element={<NewProducts />} />
                </Route>
                <Route path="users" element={<Users />}>
                    <Route path=":userId" element={<UserDetail />} />
                    <Route path="admins" element={<Admins />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    )
}

export default App

import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const orderProduct = () => {
        navigate('/order-summary', { replace: true });
    }

    return (
        <>
            Homepage
            <button onClick={orderProduct}>Place order</button>
        </>
    )
}

export default Home
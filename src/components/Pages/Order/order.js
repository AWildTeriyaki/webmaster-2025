import OrderForm from "./Components/orderform";

function Home() {
    return (
        <div
            style={{
                paddingTop: "80px",   // or whatever your navbar height is
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px"
            }}
        >
            <OrderForm />
        </div>
    );
}

export default Home;

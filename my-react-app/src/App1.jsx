function App1() {
    const name = "Harikrishna";

    return (
        <>
            <h1 style={{ color: "lightpink" }}>Page for {name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img
                    style={{ width: 280 }}
                    src="/hari.jpeg"
                    alt="YANAMALA HARIKRISHNA"
                />
                <p className="Hari">
                    I am Harikrishna. I am studying B.Tech 3rd year (ECE) in Mother Teresa Institute of Engineering and Technology, Palamaner.
                </p>
            </div>
        </>
    );
}

export default App1;

function App() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [result, setResult] = React.useState(null);

    const handleSubmit = async () => {

        const res = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        // 🔥 store response
        setResult(data);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>

            <h2>Login Form</h2>

            <input
                placeholder="Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>

            <button onClick={handleSubmit}>Submit</button>

            {/* 🔥 Show data after submit */}
            {result && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Submitted Data:</h3>
                    <p>Name is {result.name}</p>
                    <p>Password is {result.password}</p>
                </div>
            )}

        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
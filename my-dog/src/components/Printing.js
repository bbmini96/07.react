
export function Printing() {
    return (
        <div>
            <h1>Prinitng</h1>
            <div>
                <p>React 어렵다</p>
            </div>

        </div>
    );
};

export function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <p>React 어렵다</p>
            </div>
            <button onClick={() => <App />}>뒤로가기</button>
        </div>
    );
}

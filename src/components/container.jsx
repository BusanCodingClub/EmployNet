
const CenteredContainer = ({ children }) => {
    return (
        <div style={{
            display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center',
            width: '100vw',
        }}>
            <div style={{
                minHeight: '100vh', maxWidth: '800px',
                width: '100%',
                margin: '0 auto',
                backgroundColor: "#fff",

            }}>{children}</div>
        </div>
    );
};

export default CenteredContainer;

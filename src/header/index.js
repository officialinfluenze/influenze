
const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={logoStyle}>
                <h6>Logo here</h6>
                <h4>Influenze</h4>
            </div>
            <nav style={navStyle}>
                <ul style={navListStyle}>
                    <li style={navItemStyle}><a href="#" style={navLinkStyle}>Home</a></li>
                    <li style={navItemStyle}><a href="#" style={navLinkStyle}>About</a></li>
                    <li style={navItemStyle}><a href="#" style={navLinkStyle}>Services</a></li>
                    <li style={navItemStyle}><a href="#" style={navLinkStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 40px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const logoStyle = {
    display: 'flex',
};

const navStyle = {
    flexGrow: 1,
    textAlign: 'right',
};

const navListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
};

const navItemStyle = {
    marginLeft: '20px',
};

const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
};

navLinkStyle[':hover'] = {
    color: '#1e90ff', 
};

export default Header;

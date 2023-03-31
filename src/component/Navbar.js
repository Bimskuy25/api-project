import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarTest() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                    <img className="navbar-logo" src="/assets/img/F1.png" alt=""></img>
                </Navbar.Brand>
                    <Nav className="mx-auto justify-content-center">
                        <Nav.Link href="#home">F1 2020 Standings</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarTest;
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import { AppProvider } from "./context/DogsContext";

function App() {
    return (
        <AppProvider>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Search />
                    </Col>
                    <Gallery />
                </Row>
            </Container>
        </AppProvider>
    );
}

export default App;

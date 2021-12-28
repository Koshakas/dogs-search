import React from "react";
import { Card } from "react-bootstrap";
import { useGlobalContext } from "../../context/DogsContext";

const Search = () => {
    const { dogs } = useGlobalContext();

    return (
        dogs.length &&
        dogs.map(dog => (
            <Card style={{ width: "18rem" }}>
                <Card.Header>
                    <h1>Random Doggo</h1>
                </Card.Header>
                <Card.Body>
                    <img src={dog} alt="random dog" />
                </Card.Body>
            </Card>
        ))
    );
};

export default Search;

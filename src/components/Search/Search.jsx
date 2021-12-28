import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useGlobalContext } from "../../context/DogsContext";

const Search = () => {
    const { dogs, getRandomDog } = useGlobalContext();
    const [search, setSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!search) getRandomDog();
        console.log("submit", search);
    };
    console.log(dogs);
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl onChange={e => setSearch(e.target.value)} placeholder="Search a doggy woggy" aria-label="Search" />
                <Button type="submit" variant="primary" id="search">
                    Ieškoti
                </Button>
            </InputGroup>
        </Form>
    );
};

export default Search;

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StandingRace = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2020',
            headers: {
                'X-RapidAPI-Key': 'c12a3e1790mshf11d410339ee8d2p1966ebjsnd3d5026ef1bb',
                'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
            }
        };
          
        axios.request(options).then(function (response) {
            console.log(response.data);
            setProducts(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    
    
    return (
        <div>
            <TableTeam products={products}/>
        </div>
    )
};

export default StandingRace;

function TableTeam({ products }) {
    return (
        <div className="table mt-3">
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className="text-danger">
                            <th>Position</th>
                            <th>Driver Name</th>
                            <th>Nationality</th>
                            <th>Team Name</th>
                            <th>Points</th>
                            <th>Season</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr>
                                <td>{product.position}</td>
                                <td>{product.driver_name}</td>
                                <td>{product.nationality}</td>
                                <td>{product.team_name}</td>
                                <td>{product.points}</td>
                                <td>{product.season}</td>
                            </tr>))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

// export default TableTeam;
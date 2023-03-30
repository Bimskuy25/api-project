// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import { useEffect, useState } from 'react';


// const Products = () => {

//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '6f3522aebfmsha7230e5d33881f7p145079jsn82251c068a18',
//             'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
//         }
//     };

//     const [products, setProducts] = useState([]);

//     const getDataProducts = async () => {
//         const response = await fetch('https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2022', options);
//         const dataProduct = await response.json();
//         setProducts(dataProduct);
//         console.log(products);
//     };

//     useEffect(() => {
//         getDataProducts();
//     }, []);

//     // fetch('https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2022', options)
//     //     .then(response => response.json())
//     //     .then(response => console.log(response))
//     //     .catch(err => console.error(err));

//     return (
//         <div>
//         </div>
//     )
// };

// export default Products;

// // function TableTeam() {
// //   return (
// //     <div className="table mt-5">
// //         <Container>
// //             <Table striped bordered hover variant="dark">
// //                 <thead>
// //                     <tr>
// //                         <th>Team</th>
// //                         <th>Played</th>
// //                         <th>Won</th>
// //                         <th>Draw</th>
// //                         <th>Lost</th>
// //                         <th>Goals For</th>
// //                         <th>Goals Against</th>
// //                         <th>Goal Difference</th>
// //                         <th>Points</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     <tr>
// //                         <td>Manchester City</td>
// //                         <td>38</td>
// //                         <td>32</td>
// //                         <td>2</td>
// //                         <td>4</td>
// //                         <td>95</td>
// //                         <td>23</td>
// //                         <td>72</td>
// //                         <td>98</td>
// //                     </tr>
// //                 </tbody>
// //             </Table>
// //         </Container>
// //     </div>
// //   );
// // }

// // export default TableTeam;
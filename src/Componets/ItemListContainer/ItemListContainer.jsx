import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Typography } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
//Imports of firebase.
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/Config";
import { Container } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { Cat } = useParams();
const location= useLocation();
const isCategoriaIndumentaria = location.pathname.includes('categoria/indumentaria');
  const isCategoriaPaletas = location.pathname.includes('categoria/paletas');
  const isCategoriaValida = isCategoriaIndumentaria || isCategoriaPaletas;

  useEffect(() => {
    const myProducts = Cat
      ? query(collection(db, "productos"), where("cat", "==", Cat))
      : collection(db, "productos");
    getDocs(myProducts)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(newProducts)
      })
      .catch((err) => console.error(err));
  }, [Cat]);

  return (
    <Container >
      <Typography
        variant="h3"
        align="center"
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        {greeting}
      </Typography>
     
      <ItemList productos={productos} />
    </Container>
  );
};

export default ItemListContainer;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,

} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Link } from "react-router-dom";
import './Item.css'


const Item = ({ id, nombre, precio, img }) => {
  return (
    
    <Card sx={{ width: 400 }} >
      <CardActionArea>
        <CardMedia className="img"
          style={{ objectFit: "contain" }}
          component="img"
          height="200"
          image={img}
          alt={nombre}
        />
        <CardContent>
          <Typography
            style={{ fontFamily: "roboto" }}
            gutterBottom
            variant="h4"
            fontWeight={"700"}
            align="center"
            component="div"
          >
            {nombre}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color={"#05ACF0"}
            fontWeight={"500"}
          >
            ${precio}
          </Typography>
            <div className="btn">
            <Link to={`/item/${id}`}
              style={{textDecoration: "none"}}
            className=" btn-link">
              Ver mas detalles
            </Link>
         
            </div>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
};

export default Item;

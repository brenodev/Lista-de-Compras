import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia'
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// STYLE
import "./CustomCard.css";

const CustomCard = props => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className="card">
        <CardActionArea onClick={props.action} className="card-action-area">
          {props.image &&
            <CardMedia 
              component='img'
              className='card-img'
              height='100'
              image={props.image}
              title='image'
            />
          }
          <CardContent className="card-content">{props.children}</CardContent>
        </CardActionArea>
        {props.footer && (
          <>
            <Divider />
            <CardActions className="card-footer">{props.footer}</CardActions>
          </>
        )}
      </Card>
    </Link>
  </div>
);

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  
};

export default CustomCard;

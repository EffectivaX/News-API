import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useStyles } from "./utils";

const Article = ({
  title,
  description,
  author,
  url,
  urlToImage,
  publishedAt,
}) => {
  const classes = useStyles();
  return (
    <div>
      {""}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          background:
            "linear-gradient(0deg, rgba(4,82,115,1) 0%, rgba(6,67,97,1) 32%, rgba(180,27,240,1) 100%);",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
          padding: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <CardHeader
          className={classes.font}
          sx={{ textDecoration: "none", color: "white" }}
          component="a"
          variant="title"
          href={url}
          title={title}
        />
        <Typography
          sx={{ textAlign: "left", color: "#fff", fontSize: "1rem" }}
          variant="subtitle2"
          color="textSecondary"
          component="div"
        >
          {new Date(publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
        <CardMedia
          className={classes.font}
          component="img"
          height="194"
          image={urlToImage}
          alt={urlToImage}
        />
        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            sx={{ textAlign: "left", color: "white", fontSize: "1.2rem" }}
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {author}
          </Typography>
          <br />
          <Typography
            className={classes.font}
            sx={{ textAlign: "left" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;

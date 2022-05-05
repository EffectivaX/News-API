import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./article.module.css";

const Article = ({
  title,
  description,
  author,
  url,
  urlToImage,
  publishedAt,
}) => {
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
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          padding: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <CardHeader
          sx={{ textDecoration: "none", color: "white" }}
          component="a"
          variant="title"
          href={url}
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt={urlToImage}
        />
        <CardContent>
          <hr />
          <br />
          <Typography
            sx={{ textAlign: "left", color: "white", fontSize: "1.2rem" }}
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {author}
          </Typography>
          <br />
          <Typography
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

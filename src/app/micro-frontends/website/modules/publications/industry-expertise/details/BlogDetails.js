import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Blogs } from "../../data/PublicationsContent.data";
import {
  BlogDetailsData,
  SocialIcons,
  BlogIcons,
} from "../../data/PublicationsDetails.data";
import {
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import BlogContent from "./BlogContent";

const usePublicationsBlogStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    color: "black",
    position: "relative",
  },
  socialIconsSideList: {
    position: "absolute",
    flexDirection: "column",
    padding: 0,
    top: "25%",
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  socialSideIcon: {
    marginBottom: theme.spacing(4),
    cursor: "pointer",
    width: "25%",
    height: "auto",
  },
  blogImage: {
    objectFit: "cover",
    width: "100%",
    height: 400,
  },
  title: {
    marginTop: theme.spacing(2),
    textAlign: "center",
    fontWeight: "bold",
  },
  authorDetails: {
    marginTop: theme.spacing(4),
    fontWeight: 700,
    textAlign: "center",
  },
  authorDescription: {
    fontWeight: 700,
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  socialIconsList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  socialIcon: {
    marginRight: theme.spacing(4),
    cursor: "pointer",
    width: "3%",
    [theme.breakpoints.down("xs")]: {
      width: "10%",
    },
    height: "auto",
  },
}));

const BlogDetails = () => {
  const classes = usePublicationsBlogStyles();
  let { blogUrl } = useParams();
  const [blog] = useState(() => Blogs.filter((el) => el.url === blogUrl)[0]);
  const [blogDetails] = useState(
    () => BlogDetailsData.filter((el) => el.id === blog.id)[0]
  );
  const [socialIcons] = useState(() => SocialIcons);
  const [blogIcons] = useState(() => BlogIcons);

  return (
    <Container className={classes.root}>
      <img src={blog.cover} className={classes.blogImage} alt={blog.title} />
      <Toolbar className={classes.socialIconsSideList}>
        {blogIcons.map((icon) => (
          <img
            key={icon.name}
            src={icon.image}
            alt={icon.name}
            className={classes.socialSideIcon}
            onClick={() => window.open(`${icon.url}`, "_blank")}
          />
        ))}
      </Toolbar>
      <Grid container direction="row" justify="center">
        <Grid item xs={10} md={8}>
          <Typography variant="h3" className={classes.title}>
            {blog.description}
          </Typography>
          <Typography variant="subtitle1" className={classes.authorDetails}>
            By {blog.author}
            {blog.date && (
              <>
                {" "}
                on{" "}
                {new Date(blog.date).toLocaleString("default", {
                  month: "short",
                })}
                &nbsp;
                {("0" + new Date(blog.date).getDate()).slice(-2)}
                ,&nbsp;
                {new Date(blog.date).getFullYear()}
              </>
            )}
          </Typography>
          <hr color="#888" style={{ width: "15%", height: 1.25 }} />
          <BlogContent details={blogDetails.details} />
          <Typography variant="h5" className={classes.authorDescription}>
            {blogDetails.authorDetails}
          </Typography>
          <hr color="#888" style={{ width: "60%", height: 1.25 }} />
          <Toolbar className={classes.socialIconsList}>
            {socialIcons.map((icon) => (
              <img
                key={icon.name}
                src={icon.image}
                alt={icon.name}
                className={classes.socialIcon}
                onClick={() => window.open(`${icon.url}`, "_blank")}
              />
            ))}
          </Toolbar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetails;

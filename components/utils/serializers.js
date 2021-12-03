import { urlFor } from "lib/client";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.up("md")]: {
      float: "left",
      marginRight: theme.spacing(2),
    },
  },
  right: {
    [theme.breakpoints.up("md")]: {
      float: "right",
      marginLeft: theme.spacing(2),
    },
  },
  sideRoot: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const serializers = {
  listItem: (props) => {
    if (props.node.level > 1) {
      return (
        <li className="ml-6" style={{ listStyleType: "circle" }}>
          {props.children}
        </li>
      );
    }
    return <li className="ml-6 list-disc">{props.children}</li>;
  },
  types: {
    block: (props) => {
      const tag = props.node.style || "normal";
      if (tag == "h2") {
        return <Typography variant="h2">{props.children}</Typography>;
      }
      if (tag == "h3") {
        return <Typography variant="h3">{props.children}</Typography>;
      }
      if (props.children == "") {
        return <br />;
      }
      return <div>{props.children}</div>;
    },
    image: (props) => {
      const {
        node: { asset, alt, position = "center", crop, hotspot },
      } = props;
      const classes = useStyles();
      return (
        <div
          className={clsx(
            classes[position],
            position !== "center" && classes.sideRoot
          )}
        >
          <div style={{ maxWidth: "400px" }}>
            <img
              src={urlFor(props.node).format("webp").url()}
              alt={alt}
              style={{ width: "100%" }}
            />
          </div>

          <Typography variant="subtitle1" align="center">
            {alt}
          </Typography>
        </div>
      );
    },
  },
  marks: {
    color: ({ mark, children }) => {
      return <span style={{ color: mark.hex }}>{children}</span>;
    },
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/blog/${slug.current}`;
      return (
        <Link href={href}>
          <a className="text-blue-500">{children}</a>
        </Link>
      );
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener" className="text-blue-500">
          {children}
        </a>
      ) : (
        <a href={href} className="text-blue-500">
          {children}
        </a>
      );
    },
    right: ({ children }) => {
      return <div style={{ textAlign: "right" }}>{children}</div>;
    },
    center: ({ children }) => {
      return <div style={{ textAlign: "center" }}>{children}</div>;
    },
    justify: ({ children }) => {
      return <div style={{ textAlign: "justify" }}>{children}</div>;
    },
  },
};

export default serializers;

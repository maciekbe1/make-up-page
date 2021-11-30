import dateUtil from "lib/dateUtil";
import { urlFor } from "lib/client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TagIcon from "@mui/icons-material/Tag";
import Link from "@mui/material/Link";
import { CardActionArea, Grid } from "@mui/material";

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} underline="none" sx={{ height: "100%" }}>
      <Card raised sx={{ height: "100%" }}>
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <CardHeader
            title={post.title}
            subheader={dateUtil(post.publishedAt)}
          />
          <CardMedia
            component="img"
            height="240"
            image={urlFor(post.thumnailImage)
              .height(300)
              .crop("center")
              .fit("clip")
              .url()}
            alt={post.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {post.subtitle}
            </Typography>
            <Grid spacing={1} container>
              {post.categories &&
                post.categories.map((tag, index) => (
                  <Grid key={index} item>
                    <Chip
                      icon={<TagIcon fontSize="small" />}
                      label={<Typography>{tag}</Typography>}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

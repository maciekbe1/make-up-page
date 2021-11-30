import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ title, image }) {
  return (
    <Card raised sx={{ maxWidth: "300px", width: "300px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={"300px"}
          image={image}
          alt={title}
          sx={{ objectFit: "cover", width: "100%" }}
        />
        <CardContent>
          <Typography align="center" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const ReviewCard = ({ shortName, review, fullName, color }) => {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="profile">
            {shortName}
          </Avatar>
        }
        title={fullName}
      />
      <CardContent>
        <Rating value={5} readOnly />
        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

import { Box, Typography, Card, CardContent } from "@mui/material";

export default function CommentCard({ comment }) {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="subtitle2">
          {comment.username || "User"}
        </Typography>
        <Typography variant="body2">{comment.text}</Typography>
      </CardContent>
    </Card>
  );
}

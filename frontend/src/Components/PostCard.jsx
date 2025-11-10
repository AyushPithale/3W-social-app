import { Card, CardContent, Typography, IconButton, CardMedia, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosConfig";

export default function PostCard({ post, onLike }) {
  const navigate = useNavigate();

  const toggleLike = async () => {
    await API.put(`/posts/like/${post._id}`);
    onLike();
  };

  return (
    <Card>
      {post.imageUrl && (
        <CardMedia component="img" height="300" image={post.imageUrl} alt="Post image" />
      )}
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {post.userId?.username || "Anonymous"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>{post.text}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={toggleLike}>
            <FavoriteIcon color="error" />
          </IconButton>
          <Typography>{post.likesCount}</Typography>
          <IconButton onClick={() => navigate(`/post/${post._id}`)}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography>{post.comments?.length || 0}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

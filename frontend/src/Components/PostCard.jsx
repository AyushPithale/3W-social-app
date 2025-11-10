import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosConfig";
import { useState } from "react";

export default function PostCard({ post  , onLike}) {
  const navigate = useNavigate();
const [like, setLike] = useState(null)
   const toggleLike = async () => {
const liked =    await API.put(`/posts//like/${post._id}`);
setLike(liked);   
onLike();
  };
  return (
    <Card sx={{ mb: 2, borderRadius: 3 }}>
      <CardHeader
        avatar={<Avatar src={post.userId?.avatar} />}
        title={<Typography fontWeight="bold">{post.userId?.username}</Typography>}
        subheader={new Date(post.createdAt).toLocaleString()}
      />
      <CardContent>
        <Typography>{post.text}</Typography>
        {post.imageUrl && <img src={post.imageUrl} alt="" style={{ width: "100%", borderRadius: 10, marginTop: 8 }} />}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  onClick={toggleLike} ><FavoriteBorderIcon /></IconButton>
        <Typography>{post.likesCount}</Typography>
        <IconButton onClick={() => navigate(`/post/${post._id}`)}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography>{post.comments?.length || 0}</Typography>
        <IconButton><ShareIcon /></IconButton>
      </CardActions>
    </Card>
  );
}

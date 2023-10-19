import { useEffect, useState } from "react";
import { PostDetails } from "./PostsDetails/PostsDetails";
import { postsService } from "../../PostsService/PostsService";
import { Post } from "./Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const click = async (postId) => {
        const { data } = await postsService.getById(postId);
        setSelectedPost(data);
    };

    useEffect(() => {
        postsService.getAll().then(({ data }) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} click={()=>click(post.id)} />
            ))}

            {selectedPost && <PostDetails post={selectedPost} />}
        </div>
    );
};

export { Posts };




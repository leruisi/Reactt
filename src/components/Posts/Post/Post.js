const Post = ({post, click}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export {Post}
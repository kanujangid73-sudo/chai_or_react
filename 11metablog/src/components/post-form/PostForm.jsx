const submit = async (data) => {
    if (post) {
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        if (file) {
            appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
        }
    } else {
        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    }
}
export default PostForm;
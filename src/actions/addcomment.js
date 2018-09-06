export const newComment = (comment) => {
	return {
		type: 'ADD_COMMENT',
		user: 'a_s_y_a',
		text: comment.comment,
		id: comment.postId
	}
};

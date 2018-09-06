export const updateCount = (user) => {
	return {
		type: 'UPDATE_COUNT',
		id: user.postId,
		payload: user.likes,
		plus: 'true',
		minus: 'false',
		color: 'red'
	}
};

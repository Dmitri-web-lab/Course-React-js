import { useState } from "react";

function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" }
	]);

	const removeComment = (id) => {
		const newList = comments.filter((item) => item.id !== id);
		setComments(newList);
	}

	return (
		<div className="Comment">{comments.map((item) => (
			<div className="Comment__Container" key={item.id}>
				<p className="Comment__Text">{item.text}</p>
				<button className="Comment__ButtonDelete" onClick={() => removeComment(item.id)}>Удалить</button>
			</div>
		))}
		</div>
	);
}

export default CommentsList;
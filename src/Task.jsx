function Task({title, onDelete}) {
    return <li onClick={onDelete}>
                {title}
            </li>;
}

export default Task;
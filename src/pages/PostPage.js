const PostPage = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <h2>Post Detail - {id}</h2>
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  );
};

export default PostPage;

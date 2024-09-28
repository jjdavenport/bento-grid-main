const Create = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span className="text-3xl font-medium">
          Create and schedule content{" "}
          <em className="text-purple500">quicker.</em>
        </span>
        <img className="w-4/6" src={icon} />
      </article>
    </>
  );
};

export default Create;

const Create = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span className="text-threeFour font-medium leading-8 tracking-tighter">
          Create and schedule content{" "}
          <em className="text-purple500">quicker.</em>
        </span>
        <img className="w-4/6 md:w-full" src={icon} />
      </article>
    </>
  );
};

export default Create;

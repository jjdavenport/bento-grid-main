const Write = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span className="text-3xl font-medium">
          Write your content using AI.
        </span>
        <img className="w-9/12" src={icon} />
      </article>
    </>
  );
};

export default Write;

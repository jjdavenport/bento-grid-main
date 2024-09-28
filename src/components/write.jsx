const Write = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span className="font-medium ~md/lg:~text-3xl/4xl md:text-3xl">
          Write your content using AI.
        </span>
        <img className="w-9/12 md:w-full" src={icon} />
      </article>
    </>
  );
};

export default Write;

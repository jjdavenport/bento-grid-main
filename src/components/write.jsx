const Write = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span className="text-threeFour font-medium leading-8 tracking-tighter md:max-w-40">
          Write your content using AI.
        </span>
        <img className="w-9/12 md:w-full" src={icon} />
      </article>
    </>
  );
};

export default Write;

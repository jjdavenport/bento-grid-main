const Faster = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h6 className="flex flex-col gap-2">
          <span className="font-medium before:content-['>'] ~md/lg:~text-5xl/6xl">
            56%
          </span>
          faster audience growth
        </h6>
        <img className="w-7/12 md:w-11/12" src={icon} />
      </article>
    </>
  );
};

export default Faster;

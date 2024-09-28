const Faster = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h6 className="flex flex-col gap-2">
          <span className="text-5xl font-medium before:content-['>']">56%</span>
          faster audience growth
        </h6>
        <img className="w-7/12" src={icon} />
      </article>
    </>
  );
};

export default Faster;

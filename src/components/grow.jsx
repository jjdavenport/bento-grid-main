const Grow = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img className="w-4/6 md:w-6/12" src={icon} />
        <h5 className="font-semibold text-white ~md/xl:~text-3xl/4xl">
          Grow followers with non-stop content.
        </h5>
      </article>
    </>
  );
};

export default Grow;

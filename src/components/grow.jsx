const Grow = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img className="w-4/6 md:w-6/12" src={icon} />
        <h5 className="font-medium text-white ~md/lg:~text-3xl/4xl">
          Grow followers with non-stop content.
        </h5>
      </article>
    </>
  );
};

export default Grow;

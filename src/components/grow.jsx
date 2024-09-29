const Grow = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img className="w-4/6 md:w-6/12" src={icon} />
        <h5 className="text-3xl font-medium text-white">
          Grow followers with non-stop content.
        </h5>
      </article>
    </>
  );
};

export default Grow;

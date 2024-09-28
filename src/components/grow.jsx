const Grow = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img className="w-4/6" src={icon} />
        <h5 className="w-4/6 text-3xl font-medium text-white">
          Grow followers with non-stop content.
        </h5>
      </article>
    </>
  );
};

export default Grow;

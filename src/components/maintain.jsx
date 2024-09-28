const Maintain = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h3 className="text-2xl font-medium">
          Maintain a consistent posting schedule.
        </h3>
        <img className="w-8/12" src={icon} />
      </article>
    </>
  );
};

export default Maintain;

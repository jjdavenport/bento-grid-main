const Maintain = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h3 className="font-medium ~md/lg:~text-2xl/4xl">
          Maintain a consistent posting schedule.
        </h3>
        <img
          className="w-8/12 md:-mb-14 md:w-full lg:-mb-16 xl:-mb-20"
          src={icon}
        />
      </article>
    </>
  );
};

export default Maintain;

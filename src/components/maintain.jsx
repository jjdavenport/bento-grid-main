const Maintain = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h3 className="font-medium tracking-tighter ~md/xl:~text-2xl/4xl">
          Maintain a consistent posting schedule.
        </h3>
        <img
          className="w-8/12 md:-mb-12 md:w-full lg:-mb-14 xl:-mb-16"
          src={icon}
        />
      </article>
    </>
  );
};

export default Maintain;

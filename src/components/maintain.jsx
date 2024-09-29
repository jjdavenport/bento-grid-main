const Maintain = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h3 className="text-twoFour font-medium leading-8 tracking-tighter">
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

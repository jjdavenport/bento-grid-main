const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="md:h-20">
          <img className="object-contain md:absolute" src={icon} />
        </div>
        <h2 className="font-semibold ~md/xl:~text-2xl/4xl md:w-5/6 md:flex-1">
          Manage multiple accounts and platforms.
        </h2>
      </article>
    </>
  );
};

export default Manage;

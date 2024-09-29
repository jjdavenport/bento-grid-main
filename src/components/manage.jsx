const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="md:h-20">
          <img className="object-contain md:absolute" src={icon} />
        </div>
        <h2 className="font-medium tracking-tighter ~md/xl:~text-2xl/4xl md:max-w-60 md:flex-1">
          Manage multiple accounts and platforms.
        </h2>
      </article>
    </>
  );
};

export default Manage;

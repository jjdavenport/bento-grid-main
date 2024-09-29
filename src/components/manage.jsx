const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="md:h-20">
          <img className="object-contain md:absolute" src={icon} />
        </div>
        <h2 className="font-medium ~md/lg:~text-2xl/3xl">
          Manage multiple accounts and platforms.
        </h2>
      </article>
    </>
  );
};

export default Manage;

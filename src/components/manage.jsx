const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img className="object-contain" src={icon} />
        <h2 className="font-medium ~md/lg:~text-2xl/4xl md:text-3xl">
          Manage multiple accounts and platforms.
        </h2>
      </article>
    </>
  );
};

export default Manage;

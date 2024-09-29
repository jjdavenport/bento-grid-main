const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="md:h-20">
          <img className="object-contain md:absolute" src={icon} />
        </div>
        <h2 className="text-twoFour font-medium leading-8 tracking-tighter ~md/xl:~w-40/56 md:flex-1">
          Manage multiple accounts and platforms.
        </h2>
      </article>
    </>
  );
};

export default Manage;

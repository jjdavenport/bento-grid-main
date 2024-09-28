const Manage = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <img src={icon} />
        <h2> Manage multiple accounts and platforms.</h2>
      </article>
    </>
  );
};

export default Manage;

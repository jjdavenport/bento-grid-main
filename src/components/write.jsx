const Write = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <span>Write your content using AI.</span>
        <img src={icon} />
      </article>
    </>
  );
};

export default Write;

const Social = ({ icon }) => {
  return (
    <>
      <article className="bg-purple500 rounded-xl p-4 text-white">
        <h1>Social Media 10x Faster with AI</h1>
        <img className="w-1/2" src={icon} />
        <span>Over 4,000 5-star reviews</span>
      </article>
    </>
  );
};

export default Social;

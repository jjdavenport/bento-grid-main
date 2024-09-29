const Social = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h1 className="font-medium ~md/xl:~text-4xl/6xl">
          Social Media <span className="text-yellow500">10x</span> Faster with
          AI
        </h1>
        <div className="flex flex-col items-center gap-2">
          <img className="w-1/2" src={icon} />
          <span className="text-purple100">Over 4,000 5-star reviews</span>
        </div>
      </article>
    </>
  );
};

export default Social;

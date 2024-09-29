const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="flex flex-col gap-4">
          <h4 className="font-medium tracking-tighter ~md/xl:~text-2xl/4xl">
            Schedule to social media.
          </h4>
          <img src={icon} />
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
      </article>
    </>
  );
};

export default Schedule;

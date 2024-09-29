const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="-mr-40 flex flex-col gap-4">
          <h4 className="font-medium ~md/lg:~text-2xl/3xl md:w-4/6">
            Schedule to social media.
          </h4>
          <img src={icon} />
          <p className="md:w-4/6">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
      </article>
    </>
  );
};

export default Schedule;

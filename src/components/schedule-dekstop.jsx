const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="flex flex-col gap-4 ~md/xl:~-mr-20/36 ~md/xl:~py-6/12 ~md/xl:~pl-6/8">
          <h4 className="font-semibold ~md/xl:~text-2xl/4xl ~md/xl:~w-32/52">
            Schedule to social media.
          </h4>
          <img src={icon} />
          <p className="~md/xl:~w-32/52">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
      </article>
    </>
  );
};

export default Schedule;

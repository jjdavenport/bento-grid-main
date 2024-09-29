const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <div className="flex flex-col gap-4 ~md/xl:~-mr-20/36 ~md/xl:~pl-6/8">
          <h4 className="text-twoFour font-medium leading-8 tracking-tighter ~md/xl:~w-36/52">
            Schedule to social media.
          </h4>
          <img src={icon} />
          <p className="leading-5 ~md/xl:~w-32/52">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
      </article>
    </>
  );
};

export default Schedule;

const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h4 className="text-2xl font-medium">Schedule to social media.</h4>
        <img src={icon} />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </article>
    </>
  );
};

export default Schedule;

const Schedule = ({ icon, className }) => {
  return (
    <>
      <article className={className}>
        <h4 className="font-medium ~md/lg:~text-2xl/4xl">
          Schedule to social media.
        </h4>
        <img src={icon} className="md:-mr-28" />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </article>
    </>
  );
};

export default Schedule;

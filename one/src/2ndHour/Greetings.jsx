const Greetings = ({ timeOfDay }) => {
  return (
    <>
      {timeOfDay === "afternoon" ? <h2>Good {timeOfDay}</h2> : ""}
      {timeOfDay === "morning" ? <h2>Good {timeOfDay}</h2> : ""}
    </>
  );
};

export default Greetings;

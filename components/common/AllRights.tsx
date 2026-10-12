const START_YEAR = 2025;

const AllRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="t-xsmall">
      <i className="ph ph-copyright" />
      {/* Static export renders the year at build time; the client may run in a later year. */}
      <span suppressHydrationWarning>
        {currentYear > START_YEAR ? `${START_YEAR}–${currentYear}` : START_YEAR}
      </span>
      {" "}WillCode. All rights reserved.
    </p>
  );
}
export default AllRights
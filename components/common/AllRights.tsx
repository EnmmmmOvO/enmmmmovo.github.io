const START_YEAR = 2025;

const AllRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Static export renders the year at build time; the client may run in a later year.
    <p className="t-xsmall" suppressHydrationWarning>
      <i className="ph ph-copyright" />
      {currentYear > START_YEAR ? `${START_YEAR}–${currentYear}` : START_YEAR} WillCode. All rights reserved.
    </p>
  );
}
export default AllRights
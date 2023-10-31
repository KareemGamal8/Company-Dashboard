export default function ProgressBar({ color }: any) {
  const containerStyles: any = {
    height: "0.3rem",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: " background-color 0.3s",
  };

  const fillerStyles: any = {
    height: "100%",
    width: `60%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
    transition: " background-color 0.3s",
  };

  const labelStyles: any = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} className="progress-bar">
      <div style={fillerStyles} className="filler">
        <span style={labelStyles}></span>
      </div>
    </div>
  );
}

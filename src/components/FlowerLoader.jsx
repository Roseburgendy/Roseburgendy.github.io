export const FlowerLoader = ({ spin = true, petals = 12 }) => {
  return (
    <div className="loader-wrap">
      <div
        className={`flower ${spin ? "flower--spin" : ""}`}
        style={{
          // 可以在这里覆盖变量：尺寸/半径/颜色等
          // --size: "72px", --radius: "30px", --petal: "12px",
        }}
        aria-label="Loading"
        role="status"
      >
        <div className="flower__center" />
        {Array.from({ length: petals }).map((_, i) => (
          <span key={i} className="flower__petal" style={{ "--i": i }} />
        ))}
      </div>
    </div>
  );
};

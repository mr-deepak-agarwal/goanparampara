export default function WovenBorder({ height = 10 }: { height?: number }) {
  return (
    <div
      style={{
        height,
        width: "100%",
        backgroundImage:
          "repeating-linear-gradient(90deg, #B98A46 0px, #B98A46 3px, transparent 3px, transparent 9px)",
        backgroundColor: "#3E0F17",
      }}
    />
  );
}

type SparkleProps = {
  styling: {
    xPos: number;
    yPos: number;
    fontSize: number;
  }
};


const Sparkle: React.FC<SparkleProps> = ({styling}) => {
  
  const style: React.CSSProperties = {
    position: "absolute",
    top: `${styling.yPos}%`,
    left: `${styling.xPos}%`,
    fontSize: `${styling.fontSize}px`
  }
  
  return (
    <div className="sparkles">
      <p style={style}>✧</p>
    </div>
  )
}

export default Sparkle

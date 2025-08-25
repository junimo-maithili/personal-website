type SparkleProps = {
  coordinates: {
    xPos: number;
    yPos: number;
  }
};


const Sparkle: React.FC<SparkleProps> = ({coordinates}) => {
  
  const style: React.CSSProperties = {
    position: "relative",
    top: `${coordinates.yPos}%`,
    left: `${coordinates.xPos}%`
  }
  
  return (
    <div className="sparkle">
      <p style={style}>✧</p>
    </div>
  )
}

export default Sparkle

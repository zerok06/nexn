interface TimeFormatProps {
  date: Date
}

const TimeFormat: React.FC<TimeFormatProps> = ({ date }) => {
  return (
    <time>
      {date.toLocaleTimeString('es-pe', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </time>
  )
}

export default TimeFormat

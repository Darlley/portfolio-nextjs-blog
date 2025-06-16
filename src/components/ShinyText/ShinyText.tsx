import { ShinyTextProps } from './ShinyText.types';

export default function ShinyText ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  )
}

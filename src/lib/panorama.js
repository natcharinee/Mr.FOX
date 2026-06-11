export function getWrappedOffset(index, activeIndex, total) {
  let offset = index - activeIndex
  const half = Math.floor(total / 2)

  if (offset > half) offset -= total
  if (offset < -half) offset += total

  return offset
}

export function getPanoramaStyle(offset, { spacing = 280, maxVisible = 4 } = {}) {
  const abs = Math.abs(offset)

  if (abs > maxVisible) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      transform: 'translateX(-50%) scale(0.72)',
    }
  }

  const scale = 1 - abs * 0.07
  const opacity = offset === 0 ? 1 : Math.max(0.38, 1 - abs * 0.2)
  const translateX = offset * spacing
  const translateY = abs * abs * 8
  const rotateY = offset * -3

  return {
    opacity,
    visibility: 'visible',
    zIndex: 40 - abs,
    transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
  }
}

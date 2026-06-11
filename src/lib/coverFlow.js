export function getWrappedOffset(index, activeIndex, total) {
  let offset = index - activeIndex
  const half = Math.floor(total / 2)

  if (offset > half) offset -= total
  if (offset < -half) offset += total

  return offset
}

export function getCoverFlowStyle(offset, { spacing = 210, maxVisible = 3 } = {}) {
  const abs = Math.abs(offset)

  if (abs > maxVisible) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      transform: 'translateX(-50%) scale(0.45)',
    }
  }

  const scale = offset === 0 ? 1 : abs === 1 ? 0.88 : abs === 2 ? 0.76 : 0.64
  const blur = offset === 0 ? 0 : abs === 1 ? 1.5 : 3
  const opacity = offset === 0 ? 1 : abs === 1 ? 0.95 : abs === 2 ? 0.78 : 0.55
  const rotateY = offset * -34
  const translateX = offset * spacing
  const translateZ = offset === 0 ? 60 : -abs * 80

  return {
    opacity,
    visibility: 'visible',
    zIndex: 20 - abs,
    filter: blur ? `blur(${blur}px)` : undefined,
    transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
  }
}

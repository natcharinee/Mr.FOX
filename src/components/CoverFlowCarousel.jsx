import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { getCoverFlowStyle, getWrappedOffset } from '@/lib/coverFlow'

const DRAG_THRESHOLD = 48

export default function CoverFlowCarousel({
  items,
  renderSlide,
  getKey,
  stageClassName,
  stageHeight = 'min(480px, 88vw)',
  spacing = 210,
  wrap = false,
  maxVisible = 3,
  slideClassName = 'w-[min(260px,62vw)]',
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const dragStartX = useRef(null)
  const dragMoved = useRef(false)

  const go = (direction) => {
    setActiveIndex((i) => {
      const next = i + direction
      if (next < 0) return wrap ? items.length - 1 : 0
      if (next >= items.length) return wrap ? 0 : items.length - 1
      return next
    })
  }

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX
    dragMoved.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (dragStartX.current == null) return
    if (Math.abs(event.clientX - dragStartX.current) > 8) {
      dragMoved.current = true
    }
  }

  const handlePointerUp = (event) => {
    if (dragStartX.current == null) return

    const delta = event.clientX - dragStartX.current
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      dragMoved.current = true
      go(delta < 0 ? 1 : -1)
    }

    dragStartX.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
    event.preventDefault()
    if (event.deltaX > 0) go(1)
    else if (event.deltaX < 0) go(-1)
  }

  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[1200px] cursor-grab overflow-visible [perspective:1400px] touch-none select-none active:cursor-grabbing',
        stageClassName,
      )}
      style={{ height: stageHeight, transformStyle: 'preserve-3d' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
    >
      {items.map((item, index) => {
        const offset = wrap
          ? getWrappedOffset(index, activeIndex, items.length)
          : index - activeIndex
        const isActive = offset === 0

        return (
          <div
            key={getKey(item, index)}
            className={cn(
              'absolute left-1/2 top-0 transition-all duration-500 ease-out motion-reduce:transition-none',
              slideClassName,
            )}
            style={{
              ...getCoverFlowStyle(offset, { spacing, maxVisible }),
              transformOrigin: 'center center',
            }}
          >
            {renderSlide({
              item,
              index,
              offset,
              isActive,
              onSelect: () => {
                if (dragMoved.current) return
                setActiveIndex(index)
              },
            })}
          </div>
        )
      })}
    </div>
  )
}

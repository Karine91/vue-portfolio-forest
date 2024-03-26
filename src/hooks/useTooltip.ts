import { onMounted, ref, type VNodeRef, onUnmounted, watch, type Ref } from 'vue'
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export interface ITooltip {
  placement?: TooltipPlacement
  enable: Ref<boolean>
}

export function useTooltip({ placement = 'bottom', enable }: ITooltip = {} as ITooltip) {
  const parentRef = ref<any>(null)
  const functionRef: VNodeRef = (el) => {
    parentRef.value = el
  }
  const coords = ref<{ x: number; y: number }>({ x: 0, y: 0 })
  const calculateCoords = () => {
    const rect = parentRef.value.getBoundingClientRect()
    const offset = 12

    if (placement === 'bottom') {
      coords.value.y = rect.y + rect.height + offset
      coords.value.x = rect.x + rect.width / 2
    } else if (placement === 'top') {
      coords.value.y = rect.y - offset
      coords.value.x = rect.x + rect.width / 2
    } else if (placement === 'left') {
      coords.value.y = rect.y + rect.height / 2
      coords.value.x = rect.x - offset // 10px offset
    } else {
      coords.value.y = rect.y + rect.height / 2
      coords.value.x = rect.x + rect.width + offset
    }
  }

  watch(enable, (val) => {
    if (val) {
      calculateCoords()
    }
  })

  onMounted(() => {
    calculateCoords()

    window.addEventListener('resize', calculateCoords)
    document.addEventListener('scroll', calculateCoords)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', calculateCoords)
    document.removeEventListener('scroll', calculateCoords)
  })

  return {
    functionRef,
    coords
  }
}

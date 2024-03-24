import { onMounted, ref, type VNodeRef } from 'vue'

export interface ITooltip {
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export function useTooltip({ placement = 'bottom' }: ITooltip = {}) {
  const parentRef = ref<any>(null)
  const functionRef: VNodeRef = (el) => {
    parentRef.value = el
  }
  const coords = ref<{ x: number; y: number }>({ x: 0, y: 0 })

  onMounted(() => {
    console.log(parentRef.value)
    const rect = parentRef.value.getBoundingClientRect()
    console.log(rect)
    coords.value.y = rect.y + rect.height
    coords.value.x = rect.x + rect.width / 2
    console.log(coords.value)
  })

  return {
    functionRef,
    coords
  }
}

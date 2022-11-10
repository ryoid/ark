import * as pressable from '@zag-js/pressable'
import { normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export type UsePressableProps = Omit<pressable.Context, 'id'>
export type UsePressableReturn = ReturnType<typeof usePressable>

export const usePressable = (props: UsePressableProps) => {
  const context = {
    id: useId(),
    ...props,
  }
  const [state, send] = useMachine(pressable.machine(context), { context })

  return pressable.connect(state, send, normalizeProps)
}
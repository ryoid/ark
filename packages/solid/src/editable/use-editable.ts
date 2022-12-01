import * as editable from '@zag-js/editable'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { createMemo, createUniqueId, mergeProps } from 'solid-js'
import type { Optional } from '../types'

export type UseEditableProps = Optional<editable.Context, 'id'>
export type UseEditableReturn = ReturnType<typeof useEditable>

export const useEditable = (props: UseEditableProps) => {
  const context = mergeProps({ id: createUniqueId() }, props)
  const [state, send] = useMachine(editable.machine(context), { context })

  return createMemo(() => editable.connect(state, send, normalizeProps))
}
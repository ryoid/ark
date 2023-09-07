import { mergeProps } from '@zag-js/react'
import type { ItemProps } from '@zag-js/select'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark } from '../factory'
import type { Assign } from '../types'
import { useSelectContext } from './select-context'
import { SelectItemProvider } from './select-item-context'

export type SelectItemProps = Assign<ComponentPropsWithoutRef<typeof ark.div>, ItemProps>

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['item'])
  const api = useSelectContext()
  const mergedProps = mergeProps(api.getItemProps(itemProps), localProps)

  return (
    <SelectItemProvider value={itemProps}>
      <ark.div {...mergedProps} ref={ref} />
    </SelectItemProvider>
  )
})

SelectItem.displayName = 'SelectItem'

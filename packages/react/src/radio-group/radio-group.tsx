import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import { ark, HTMLArkProps } from '../factory'
import { splitProps, type Assign } from '../split-props'
import { RadioGroupProvider } from './radio-group-context'
import { useRadioGroup, UseRadioGroupProps } from './use-radio-group'

export type RadioGroupProps = Assign<HTMLArkProps<'div'>, UseRadioGroupProps>

export const RadioGroup = forwardRef<'div', UseRadioGroupProps>((props, ref) => {
  const [useRadioGroupProps, divProps] = splitProps(props, [
    'defaultValue',
    'dir',
    'disabled',
    'getRootNode',
    'ids',
    'name',
    'onChange',
    'orientation',
    'readonly',
    'value',
  ])
  const radioGroup = useRadioGroup(useRadioGroupProps)
  const mergedProps = mergeProps(radioGroup.rootProps, divProps)

  return (
    <RadioGroupProvider value={radioGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RadioGroupProvider>
  )
})
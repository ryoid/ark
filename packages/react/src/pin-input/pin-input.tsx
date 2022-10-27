import { atlas, HTMLAtlasProps } from '../factory'
import { forwardRef } from '../forwardRef'
import { PinInputProvider } from './pin-input-context'
import { usePinInput, UsePinInputProps } from './use-pin-input'

export type PinInputProps = HTMLAtlasProps<'div'> & UsePinInputProps

export const PinInput = forwardRef<'div', PinInputProps>((props, ref) => {
  const { api, htmlProps } = usePinInput(props)

  return (
    <PinInputProvider value={api}>
      <atlas.div ref={ref} {...api.rootProps} {...htmlProps} />
    </PinInputProvider>
  )
})

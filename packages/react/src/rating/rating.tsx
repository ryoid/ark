import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import { ark, HTMLArkProps } from '../factory'
import { splitProps, type Assign } from '../split-props'
import { RatingProvider } from './rating-context'
import { useRating, UseRatingProps } from './use-rating'

export type RatingProps = Assign<HTMLArkProps<'input'>, UseRatingProps>

export const Rating = forwardRef<'input', RatingProps>((props, ref) => {
  const [useRatingProps, divProps] = splitProps(props as UseRatingProps, [
    'allowHalf',
    'autoFocus',
    'defaultValue',
    'dir',
    'disabled',
    'getRootNode',
    'ids',
    'max',
    'name',
    'onChange',
    'onHover',
    'readonly',
    'translations',
    'value',
  ])
  const rating = useRating(useRatingProps)
  const mergedProps = mergeProps(rating.rootProps, divProps)

  return (
    <RatingProvider value={rating}>
      <ark.div {...mergedProps}>
        {props.children}
        <ark.input {...rating.inputProps} ref={ref} />
      </ark.div>
    </RatingProvider>
  )
})
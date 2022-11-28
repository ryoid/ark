import { splitProps } from 'solid-js'

export const createSplitProps =
  <Target>() =>
  <Keys extends (keyof Target)[], Props extends Target = Target>(
    props: Props,
    keys: Keys & ([keyof Target] extends [Keys[number]] ? unknown : never),
  ) =>
    splitProps(props, keys)
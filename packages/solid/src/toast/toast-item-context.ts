import { createContext } from '../createContext'
import type { UseToastItemReturn } from './use-toast-item'

export type ToastItemContext = UseToastItemReturn

export const [ToastItemProvider, useToastItemContext] = createContext<ToastItemContext>({
  hookName: 'useToastItemContext',
  providerName: '<ToastItemProvider />',
})
import { For, createSignal } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Accordion } from './'

const meta: Meta = {
  title: 'Accordion',
}

export default meta

export const Basic = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Initial = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root value={['panel-1']}>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const RenderProp = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            {(api) => (
              <>
                <Accordion.ItemTrigger>{api().isOpen ? 'Close' : 'Open'}</Accordion.ItemTrigger>
                <Accordion.ItemContent>{item} content</Accordion.ItemContent>
              </>
            )}
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}
export const Collapsible = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root collapsible>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Multiple = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root multiple>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Controlled = () => {
  const [value, setValue] = createSignal<string[]>([])
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root value={value()} onValueChange={(details) => setValue(details.value)}>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Vertical = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root orientation="vertical">
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item} disabled={item === 'panel-2'}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

export const Disabled = () => {
  const items = ['panel-1', 'panel-2', 'panel-3']
  return (
    <Accordion.Root>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item} disabled={item === 'panel-2'}>
            <Accordion.ItemTrigger>{item} trigger</Accordion.ItemTrigger>
            <Accordion.ItemContent>{item} content</Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  )
}

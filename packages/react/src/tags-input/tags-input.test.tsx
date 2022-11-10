import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Fragment } from 'react'
import { Tag } from './tag'
import { TagDeleteButton } from './tag-delete-button'
import { TagInput } from './tag-input'
import { TagsInput, TagsInputProps } from './tags-input'
import { TagsInputClearButton } from './tags-input-clear-button'
import { TagsInputControl } from './tags-input-control'
import { TagsInputField } from './tags-input-field'

const ComponentUnderTest = (props: Omit<TagsInputProps, 'children'>) => (
  <TagsInput value={['react', 'solid', 'vue']} {...props}>
    {({ value }) => (
      <TagsInputControl>
        {(value ?? []).map((value, index) => (
          <Fragment key={index}>
            <Tag index={index} value={value}>
              <span>{value}</span>
              <TagDeleteButton index={index} value={value}>
                &#x2715;
              </TagDeleteButton>
            </Tag>
            <TagInput index={index} value={value} />
          </Fragment>
        ))}
        <TagsInputField placeholder="Add tag" />
        <TagsInputClearButton>Clear all</TagsInputClearButton>
      </TagsInputControl>
    )}
  </TagsInput>
)

describe('TagsInput', () => {
  it('should render', async () => {
    render(<ComponentUnderTest />)
  })

  it('should allow to add a new item', async () => {
    render(<ComponentUnderTest />)
    const input = screen.getByPlaceholderText('Add tag')
    await user.type(input, 'angular')
    await user.keyboard('[Enter]')

    expect(screen.getByText('angular')).toBeInTheDocument()
  })

  it('should allow to add and delete a new item', async () => {
    render(<ComponentUnderTest />)
    const input = screen.getByPlaceholderText('Add tag')
    await user.type(input, 'angular')
    await user.keyboard('[Enter]')

    expect(screen.getByText('angular')).toBeInTheDocument()

    await user.keyboard('[ArrowLeft]')
    await user.keyboard('[Delete]')

    expect(screen.queryByText('angular')).toBeNull()
  })

  it('should clear all item when clear all button is clicked', async () => {
    render(<ComponentUnderTest />)
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('solid')).toBeInTheDocument()
    expect(screen.getByText('vue')).toBeInTheDocument()
    await user.click(screen.getByText('Clear all'))

    expect(screen.queryByText('react')).toBeNull()
    expect(screen.queryByText('solid')).toBeNull()
    expect(screen.queryByText('vue')).toBeNull()
  })
})
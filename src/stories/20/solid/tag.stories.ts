import type { Meta, StoryObj } from '@storybook/svelte'
import TagSvelte from '../../../lib/20/solid/tag.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: TagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tag: Story = {}

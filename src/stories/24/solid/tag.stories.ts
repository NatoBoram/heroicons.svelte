import type { Meta, StoryObj } from '@storybook/svelte'
import TagSvelte from '../../../lib/24/solid/tag.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: TagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tag: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import TagSvelte from '../../../lib/16/solid/tag.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TagSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tag: Story = {}

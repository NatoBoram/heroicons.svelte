import type { Meta, StoryObj } from '@storybook/svelte'
import { Tag as TagSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: TagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tag: Story = {}

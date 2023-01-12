import type { Meta, StoryObj } from '@storybook/svelte'
import { Tag as TagSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: TagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tag: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import RssSvelte from '../../../lib/24/outline/rss.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: RssSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RssSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Rss: Story = {}

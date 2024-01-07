import type { Meta, StoryObj } from '@storybook/svelte'
import RssSvelte from '../../../lib/16/solid/rss.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: RssSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<RssSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Rss: Story = {}

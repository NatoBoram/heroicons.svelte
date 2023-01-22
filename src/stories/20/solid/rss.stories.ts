import type { Meta, StoryObj } from '@storybook/svelte'
import RssSvelte from '../../../lib/20/solid/rss.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: RssSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RssSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Rss: Story = {}

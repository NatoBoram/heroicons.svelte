import type { Meta, StoryObj } from '@storybook/svelte'
import { Rss as RssSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: RssSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RssSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Rss: Story = {}

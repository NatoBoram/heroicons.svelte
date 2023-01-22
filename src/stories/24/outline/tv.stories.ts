import type { Meta, StoryObj } from '@storybook/svelte'
import TvSvelte from '../../../lib/24/outline/tv.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: TvSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

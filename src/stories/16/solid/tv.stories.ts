import type { Meta, StoryObj } from '@storybook/svelte'
import TvSvelte from '../../../lib/16/solid/tv.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TvSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

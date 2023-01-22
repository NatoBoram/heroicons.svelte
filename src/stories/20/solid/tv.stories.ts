import type { Meta, StoryObj } from '@storybook/svelte'
import TvSvelte from '../../../lib/20/solid/tv.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: TvSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

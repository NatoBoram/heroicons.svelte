import type { Meta, StoryObj } from '@storybook/svelte'
import { Tv as TvSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: TvSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

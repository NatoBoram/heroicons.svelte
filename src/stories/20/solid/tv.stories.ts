import type { Meta, StoryObj } from '@storybook/svelte'
import { Tv as TvSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: TvSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

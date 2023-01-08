import type { Meta, StoryObj } from '@storybook/svelte'
import { Tv as TvSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: TvSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TvSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Tv: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import SparklesSvelte from '../../../lib/16/solid/sparkles.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SparklesSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SparklesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sparkles: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { Sparkles as SparklesSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: SparklesSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SparklesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sparkles: Story = {}

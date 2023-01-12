import type { Meta, StoryObj } from '@storybook/svelte'
import { Sparkles as SparklesSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: SparklesSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SparklesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sparkles: Story = {}

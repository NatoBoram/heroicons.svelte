import type { Meta, StoryObj } from '@storybook/svelte'
import { Sparkles as SparklesSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: SparklesSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SparklesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sparkles: Story = {}

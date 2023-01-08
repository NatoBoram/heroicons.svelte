import type { Meta, StoryObj } from '@storybook/svelte'
import { ChevronDown as ChevronDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDown: Story = {}

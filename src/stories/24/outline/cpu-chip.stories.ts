import type { Meta, StoryObj } from '@storybook/svelte'
import CpuChipSvelte from '../../../lib/24/outline/cpu-chip.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CpuChipSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CpuChipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CpuChip: Story = {}

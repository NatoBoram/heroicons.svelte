import type { Meta, StoryObj } from '@storybook/svelte'
import CpuChipSvelte from '../../../lib/16/solid/cpu-chip.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CpuChipSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CpuChipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CpuChip: Story = {}

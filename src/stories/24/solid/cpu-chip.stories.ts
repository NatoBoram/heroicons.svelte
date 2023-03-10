import type { Meta, StoryObj } from '@storybook/svelte'
import CpuChipSvelte from '../../../lib/24/solid/cpu-chip.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CpuChipSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CpuChipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CpuChip: Story = {}

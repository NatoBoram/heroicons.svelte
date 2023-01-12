import type { Meta, StoryObj } from '@storybook/svelte'
import { CpuChip as CpuChipSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CpuChipSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CpuChipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CpuChip: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { CpuChip as CpuChipSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CpuChipSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CpuChipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CpuChip: Story = {}

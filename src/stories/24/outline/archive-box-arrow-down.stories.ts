import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxArrowDownSvelte from '../../../lib/24/outline/archive-box-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArchiveBoxArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxArrowDown: Story = {}

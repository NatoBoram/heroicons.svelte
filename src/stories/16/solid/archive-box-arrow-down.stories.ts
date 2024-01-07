import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxArrowDownSvelte from '../../../lib/16/solid/archive-box-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArchiveBoxArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArchiveBoxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxArrowDown: Story = {}

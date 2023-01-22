import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxArrowDownSvelte from '../../../lib/20/solid/archive-box-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArchiveBoxArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArchiveBoxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxArrowDown: Story = {}

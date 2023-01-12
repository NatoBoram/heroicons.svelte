import type { Meta, StoryObj } from '@storybook/svelte'
import { ArchiveBoxArrowDown as ArchiveBoxArrowDownSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArchiveBoxArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArchiveBoxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxArrowDown: Story = {}

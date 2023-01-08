import type { Meta, StoryObj } from '@storybook/svelte'
import { ArchiveBoxArrowDown as ArchiveBoxArrowDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArchiveBoxArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxArrowDown: Story = {}

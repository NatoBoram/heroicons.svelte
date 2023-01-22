import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxXMarkSvelte from '../../../lib/24/outline/archive-box-x-mark.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArchiveBoxXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxXMark: Story = {}

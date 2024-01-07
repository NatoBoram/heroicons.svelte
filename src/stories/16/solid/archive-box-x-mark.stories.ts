import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxXMarkSvelte from '../../../lib/16/solid/archive-box-x-mark.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArchiveBoxXMarkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArchiveBoxXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxXMark: Story = {}

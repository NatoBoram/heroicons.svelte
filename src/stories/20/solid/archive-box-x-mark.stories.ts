import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxXMarkSvelte from '../../../lib/20/solid/archive-box-x-mark.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArchiveBoxXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArchiveBoxXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxXMark: Story = {}

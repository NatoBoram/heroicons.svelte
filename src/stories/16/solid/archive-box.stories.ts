import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxSvelte from '../../../lib/16/solid/archive-box.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArchiveBoxSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArchiveBoxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBox: Story = {}

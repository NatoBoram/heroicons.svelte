import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxSvelte from '../../../lib/24/outline/archive-box.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArchiveBoxSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBox: Story = {}

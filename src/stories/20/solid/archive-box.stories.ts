import type { Meta, StoryObj } from '@storybook/svelte'
import ArchiveBoxSvelte from '../../../lib/20/solid/archive-box.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArchiveBoxSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArchiveBoxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBox: Story = {}

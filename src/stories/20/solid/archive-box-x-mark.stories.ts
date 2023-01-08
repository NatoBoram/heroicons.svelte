import type { Meta, StoryObj } from '@storybook/svelte'
import { ArchiveBoxXMark as ArchiveBoxXMarkSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArchiveBoxXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArchiveBoxXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxXMark: Story = {}

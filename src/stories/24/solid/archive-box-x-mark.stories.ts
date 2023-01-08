import type { Meta, StoryObj } from '@storybook/svelte'
import { ArchiveBoxXMark as ArchiveBoxXMarkSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArchiveBoxXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBoxXMark: Story = {}

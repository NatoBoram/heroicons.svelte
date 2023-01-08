import type { Meta, StoryObj } from '@storybook/svelte'
import { ArchiveBox as ArchiveBoxSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArchiveBoxSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArchiveBoxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArchiveBox: Story = {}

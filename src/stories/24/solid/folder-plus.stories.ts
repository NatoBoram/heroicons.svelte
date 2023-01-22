import type { Meta, StoryObj } from '@storybook/svelte'
import FolderPlusSvelte from '../../../lib/24/solid/folder-plus.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FolderPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

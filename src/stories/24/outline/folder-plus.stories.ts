import type { Meta, StoryObj } from '@storybook/svelte'
import FolderPlusSvelte from '../../../lib/24/outline/folder-plus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

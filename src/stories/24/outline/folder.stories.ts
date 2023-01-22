import type { Meta, StoryObj } from '@storybook/svelte'
import FolderSvelte from '../../../lib/24/outline/folder.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

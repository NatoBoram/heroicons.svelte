import type { Meta, StoryObj } from '@storybook/svelte'
import FolderOpenSvelte from '../../../lib/24/outline/folder-open.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderOpen: Story = {}

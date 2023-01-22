import type { Meta, StoryObj } from '@storybook/svelte'
import FolderArrowDownSvelte from '../../../lib/24/outline/folder-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderArrowDown: Story = {}

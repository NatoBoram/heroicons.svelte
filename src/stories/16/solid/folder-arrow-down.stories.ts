import type { Meta, StoryObj } from '@storybook/svelte'
import FolderArrowDownSvelte from '../../../lib/16/solid/folder-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FolderArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FolderArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderArrowDown: Story = {}

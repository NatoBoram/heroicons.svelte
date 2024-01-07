import type { Meta, StoryObj } from '@storybook/svelte'
import FolderPlusSvelte from '../../../lib/16/solid/folder-plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FolderPlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

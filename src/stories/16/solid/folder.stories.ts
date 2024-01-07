import type { Meta, StoryObj } from '@storybook/svelte'
import FolderSvelte from '../../../lib/16/solid/folder.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FolderSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

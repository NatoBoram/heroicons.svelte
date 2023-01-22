import type { Meta, StoryObj } from '@storybook/svelte'
import FolderSvelte from '../../../lib/24/solid/folder.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FolderSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

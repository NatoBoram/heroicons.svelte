import type { Meta, StoryObj } from '@storybook/svelte'
import FolderSvelte from '../../../lib/20/solid/folder.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FolderSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

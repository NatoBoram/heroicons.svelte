import type { Meta, StoryObj } from '@storybook/svelte'
import FolderOpenSvelte from '../../../lib/16/solid/folder-open.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FolderOpenSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FolderOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderOpen: Story = {}

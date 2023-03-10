import type { Meta, StoryObj } from '@storybook/svelte'
import FolderPlusSvelte from '../../../lib/20/solid/folder-plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FolderPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

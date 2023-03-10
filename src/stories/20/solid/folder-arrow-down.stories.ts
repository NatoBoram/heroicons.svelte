import type { Meta, StoryObj } from '@storybook/svelte'
import FolderArrowDownSvelte from '../../../lib/20/solid/folder-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FolderArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderArrowDown: Story = {}

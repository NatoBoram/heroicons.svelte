import type { Meta, StoryObj } from '@storybook/svelte'
import { Folder as FolderSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: FolderSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

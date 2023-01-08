import type { Meta, StoryObj } from '@storybook/svelte'
import { Folder as FolderSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: FolderSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Folder: Story = {}

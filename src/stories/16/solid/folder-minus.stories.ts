import type { Meta, StoryObj } from '@storybook/svelte'
import FolderMinusSvelte from '../../../lib/16/solid/folder-minus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FolderMinusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FolderMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderMinus: Story = {}

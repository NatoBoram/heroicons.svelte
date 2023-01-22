import type { Meta, StoryObj } from '@storybook/svelte'
import FolderMinusSvelte from '../../../lib/24/outline/folder-minus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderMinus: Story = {}

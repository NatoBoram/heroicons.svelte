import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderPlus as FolderPlusSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: FolderPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

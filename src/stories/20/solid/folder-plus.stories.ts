import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderPlus as FolderPlusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FolderPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderPlus: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderOpen as FolderOpenSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: FolderOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderOpen: Story = {}

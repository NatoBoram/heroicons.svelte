import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderArrowDown as FolderArrowDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderArrowDown: Story = {}
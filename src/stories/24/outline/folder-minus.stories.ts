import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderMinus as FolderMinusSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FolderMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderMinus: Story = {}
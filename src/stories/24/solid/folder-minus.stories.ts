import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderMinus as FolderMinusSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: FolderMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FolderMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderMinus: Story = {}

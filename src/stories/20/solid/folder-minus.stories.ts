import type { Meta, StoryObj } from '@storybook/svelte'
import { FolderMinus as FolderMinusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FolderMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FolderMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FolderMinus: Story = {}

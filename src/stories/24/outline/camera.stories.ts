import type { Meta, StoryObj } from '@storybook/svelte'
import CameraSvelte from '../../../lib/24/outline/camera.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CameraSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Camera: Story = {}

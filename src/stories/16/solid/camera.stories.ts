import type { Meta, StoryObj } from '@storybook/svelte'
import CameraSvelte from '../../../lib/16/solid/camera.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CameraSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Camera: Story = {}

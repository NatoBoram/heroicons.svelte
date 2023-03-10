import type { Meta, StoryObj } from '@storybook/svelte'
import CameraSvelte from '../../../lib/20/solid/camera.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CameraSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Camera: Story = {}

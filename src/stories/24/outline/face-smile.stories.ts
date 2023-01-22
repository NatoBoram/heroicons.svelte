import type { Meta, StoryObj } from '@storybook/svelte'
import FaceSmileSvelte from '../../../lib/24/outline/face-smile.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: FaceSmileSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FaceSmileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceSmile: Story = {}

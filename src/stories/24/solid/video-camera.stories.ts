import type { Meta, StoryObj } from '@storybook/svelte'
import VideoCameraSvelte from '../../../lib/24/solid/video-camera.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: VideoCameraSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VideoCameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCamera: Story = {}

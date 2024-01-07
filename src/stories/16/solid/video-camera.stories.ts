import type { Meta, StoryObj } from '@storybook/svelte'
import VideoCameraSvelte from '../../../lib/16/solid/video-camera.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: VideoCameraSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<VideoCameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCamera: Story = {}

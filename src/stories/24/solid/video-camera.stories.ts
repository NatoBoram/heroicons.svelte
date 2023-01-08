import type { Meta, StoryObj } from '@storybook/svelte'
import { VideoCamera as VideoCameraSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: VideoCameraSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VideoCameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCamera: Story = {}

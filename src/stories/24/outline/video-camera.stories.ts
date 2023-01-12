import type { Meta, StoryObj } from '@storybook/svelte'
import { VideoCamera as VideoCameraSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: VideoCameraSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VideoCameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCamera: Story = {}

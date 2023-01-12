import type { Meta, StoryObj } from '@storybook/svelte'
import { VideoCamera as VideoCameraSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: VideoCameraSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<VideoCameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCamera: Story = {}

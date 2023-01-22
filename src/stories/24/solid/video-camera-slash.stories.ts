import type { Meta, StoryObj } from '@storybook/svelte'
import VideoCameraSlashSvelte from '../../../lib/24/solid/video-camera-slash.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: VideoCameraSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VideoCameraSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCameraSlash: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import VideoCameraSlashSvelte from '../../../lib/16/solid/video-camera-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: VideoCameraSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<VideoCameraSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCameraSlash: Story = {}

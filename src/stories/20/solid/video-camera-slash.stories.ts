import type { Meta, StoryObj } from '@storybook/svelte'
import VideoCameraSlashSvelte from '../../../lib/20/solid/video-camera-slash.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: VideoCameraSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<VideoCameraSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCameraSlash: Story = {}

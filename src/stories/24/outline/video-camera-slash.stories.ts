import type { Meta, StoryObj } from '@storybook/svelte'
import { VideoCameraSlash as VideoCameraSlashSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: VideoCameraSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<VideoCameraSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const VideoCameraSlash: Story = {}

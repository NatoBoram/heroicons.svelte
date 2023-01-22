import type { Meta, StoryObj } from '@storybook/svelte'
import SpeakerXMarkSvelte from '../../../lib/24/outline/speaker-x-mark.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: SpeakerXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SpeakerXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerXMark: Story = {}

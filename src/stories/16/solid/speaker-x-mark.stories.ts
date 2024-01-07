import type { Meta, StoryObj } from '@storybook/svelte'
import SpeakerXMarkSvelte from '../../../lib/16/solid/speaker-x-mark.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SpeakerXMarkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SpeakerXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerXMark: Story = {}

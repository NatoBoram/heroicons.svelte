import type { Meta, StoryObj } from '@storybook/svelte'
import SpeakerWaveSvelte from '../../../lib/24/solid/speaker-wave.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: SpeakerWaveSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SpeakerWaveSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerWave: Story = {}

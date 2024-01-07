import type { Meta, StoryObj } from '@storybook/svelte'
import SpeakerWaveSvelte from '../../../lib/16/solid/speaker-wave.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SpeakerWaveSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SpeakerWaveSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerWave: Story = {}

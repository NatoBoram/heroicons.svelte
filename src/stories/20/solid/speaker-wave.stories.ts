import type { Meta, StoryObj } from '@storybook/svelte'
import { SpeakerWave as SpeakerWaveSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: SpeakerWaveSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SpeakerWaveSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerWave: Story = {}

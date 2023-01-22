import type { Meta, StoryObj } from '@storybook/svelte'
import SpeakerXMarkSvelte from '../../../lib/20/solid/speaker-x-mark.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SpeakerXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SpeakerXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerXMark: Story = {}

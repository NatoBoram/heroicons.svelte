import type { Meta, StoryObj } from '@storybook/svelte'
import { SpeakerXMark as SpeakerXMarkSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: SpeakerXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SpeakerXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerXMark: Story = {}

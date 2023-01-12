import type { Meta, StoryObj } from '@storybook/svelte'
import { SpeakerXMark as SpeakerXMarkSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: SpeakerXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SpeakerXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SpeakerXMark: Story = {}

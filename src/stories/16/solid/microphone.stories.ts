import type { Meta, StoryObj } from '@storybook/svelte'
import MicrophoneSvelte from '../../../lib/16/solid/microphone.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MicrophoneSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MicrophoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Microphone: Story = {}

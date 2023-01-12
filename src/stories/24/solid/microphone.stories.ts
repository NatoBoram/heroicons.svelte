import type { Meta, StoryObj } from '@storybook/svelte'
import { Microphone as MicrophoneSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: MicrophoneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MicrophoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Microphone: Story = {}

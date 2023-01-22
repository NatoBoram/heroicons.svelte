import type { Meta, StoryObj } from '@storybook/svelte'
import MicrophoneSvelte from '../../../lib/20/solid/microphone.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MicrophoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MicrophoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Microphone: Story = {}

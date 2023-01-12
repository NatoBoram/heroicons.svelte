import type { Meta, StoryObj } from '@storybook/svelte'
import { Microphone as MicrophoneSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MicrophoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MicrophoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Microphone: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { SignalSlash as SignalSlashSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: SignalSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SignalSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SignalSlash: Story = {}

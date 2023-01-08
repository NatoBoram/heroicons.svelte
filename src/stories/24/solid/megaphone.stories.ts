import type { Meta, StoryObj } from '@storybook/svelte'
import { Megaphone as MegaphoneSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: MegaphoneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MegaphoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Megaphone: Story = {}

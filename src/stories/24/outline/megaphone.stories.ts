import type { Meta, StoryObj } from '@storybook/svelte'
import { Megaphone as MegaphoneSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MegaphoneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MegaphoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Megaphone: Story = {}

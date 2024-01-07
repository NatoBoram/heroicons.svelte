import type { Meta, StoryObj } from '@storybook/svelte'
import MegaphoneSvelte from '../../../lib/16/solid/megaphone.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MegaphoneSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MegaphoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Megaphone: Story = {}

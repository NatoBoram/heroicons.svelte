import type { Meta, StoryObj } from '@storybook/svelte'
import MegaphoneSvelte from '../../../lib/20/solid/megaphone.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MegaphoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MegaphoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Megaphone: Story = {}

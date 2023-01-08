import type { Meta, StoryObj } from '@storybook/svelte'
import { Megaphone as MegaphoneSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: MegaphoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MegaphoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Megaphone: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { Gift as GiftSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: GiftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GiftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gift: Story = {}

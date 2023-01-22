import type { Meta, StoryObj } from '@storybook/svelte'
import MinusSvelte from '../../../lib/20/solid/minus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: MinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Minus: Story = {}

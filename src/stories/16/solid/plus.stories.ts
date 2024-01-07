import type { Meta, StoryObj } from '@storybook/svelte'
import PlusSvelte from '../../../lib/16/solid/plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Plus: Story = {}

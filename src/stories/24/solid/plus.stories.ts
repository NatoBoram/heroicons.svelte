import type { Meta, StoryObj } from '@storybook/svelte'
import { Plus as PlusSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Plus: Story = {}

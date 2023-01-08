import type { Meta, StoryObj } from '@storybook/svelte'
import { Plus as PlusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Plus: Story = {}

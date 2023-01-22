import type { Meta, StoryObj } from '@storybook/svelte'
import PlusSvelte from '../../../lib/20/solid/plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Plus: Story = {}

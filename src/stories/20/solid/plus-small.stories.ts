import type { Meta, StoryObj } from '@storybook/svelte'
import PlusSmallSvelte from '../../../lib/20/solid/plus-small.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PlusSmallSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlusSmallSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSmall: Story = {}

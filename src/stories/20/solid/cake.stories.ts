import type { Meta, StoryObj } from '@storybook/svelte'
import { Cake as CakeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CakeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CakeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Cake: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { Scissors as ScissorsSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ScissorsSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ScissorsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scissors: Story = {}

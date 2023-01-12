import type { Meta, StoryObj } from '@storybook/svelte'
import { Fire as FireSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: FireSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FireSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Fire: Story = {}

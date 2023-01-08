import type { Meta, StoryObj } from '@storybook/svelte'
import { Backspace as BackspaceSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BackspaceSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackspaceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backspace: Story = {}

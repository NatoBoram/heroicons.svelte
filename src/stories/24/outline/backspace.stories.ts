import type { Meta, StoryObj } from '@storybook/svelte'
import { Backspace as BackspaceSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BackspaceSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackspaceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backspace: Story = {}

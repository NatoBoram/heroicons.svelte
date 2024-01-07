import type { Meta, StoryObj } from '@storybook/svelte'
import EyeSvelte from '../../../lib/16/solid/eye.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EyeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EyeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Eye: Story = {}

import type { Meta, StoryObj } from '@storybook/svelte'
import { Eye as EyeSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: EyeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Eye: Story = {}

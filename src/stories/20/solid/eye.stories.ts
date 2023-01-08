import type { Meta, StoryObj } from '@storybook/svelte'
import { Eye as EyeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: EyeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EyeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Eye: Story = {}

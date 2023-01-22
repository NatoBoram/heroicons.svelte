import type { Meta, StoryObj } from '@storybook/svelte'
import EyeSvelte from '../../../lib/20/solid/eye.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EyeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EyeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Eye: Story = {}
